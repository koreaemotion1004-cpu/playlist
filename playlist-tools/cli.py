import sys
import json
from pathlib import Path
import click

# UTF-8 output for Windows
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from src.metadata.generator import generate_metadata
from src.metadata.formatter import format_youtube_md
from src.common.storage import ensure_project_dir, save_text


@click.group()
def cli():
    """Playlist Tools: YouTube cafe jazz channel automation."""
    pass


# ============================================================
# META: Metadata generation
# ============================================================
@cli.group()
def meta():
    """Metadata generation commands."""
    pass


@meta.command("generate")
@click.option("--project", required=True, help="Project name (e.g. 260414)")
@click.option("--songs-file", type=click.Path(exists=True), required=True,
              help="JSON file: {songs: [{title, duration_sec}, ...]}")
@click.option("--ref-a", required=True, help="Reference title A (high-VPH)")
@click.option("--ref-b", required=True, help="Reference title B (high-VPH)")
@click.option("--mood", default="", help="Optional extra mood keywords")
def meta_generate(project, songs_file, ref_a, ref_b, mood):
    """Generate YouTube metadata using 2 reference titles as keyword base."""
    with open(songs_file, "r", encoding="utf-8") as f:
        data = json.load(f)
    songs = data["songs"] if isinstance(data, dict) and "songs" in data else data

    click.echo(f"Project: {project}")
    click.echo(f"Songs: {len(songs)} tracks")
    click.echo(f"Reference A: {ref_a}")
    click.echo(f"Reference B: {ref_b}\n")

    try:
        metadata = generate_metadata(project, songs, [ref_a, ref_b], mood)
    except RuntimeError as e:
        click.echo(f"\n{e}", err=True)
        sys.exit(1)

    project_dir = ensure_project_dir(project)
    youtube_md = format_youtube_md(metadata)
    save_text(project_dir / "youtube.md", youtube_md)

    click.echo(f"✅ Saved to: {project_dir / 'youtube.md'}")
    if "keyword_overlap_explanation" in metadata:
        click.echo(f"\n🔍 {metadata['keyword_overlap_explanation']}")
    click.echo("\n" + "=" * 60)
    click.echo(youtube_md)


@meta.command("preview")
@click.option("--project", required=True)
def meta_preview(project):
    """Preview generated metadata."""
    project_dir = ensure_project_dir(project)
    md_file = project_dir / "youtube.md"
    if not md_file.exists():
        click.echo(f"Not found: {md_file}", err=True)
        sys.exit(1)
    click.echo(md_file.read_text(encoding="utf-8"))


# ============================================================
# CHANNELS: Registry management
# ============================================================
@cli.group()
def channels():
    """Manage tracked channels (your channel + references)."""
    pass


@channels.command("add")
@click.option("--key", required=True, help="Short identifier (e.g. mine, mysig)")
@click.option("--channel-id", required=True, help="YouTube channel ID (UCxxx...)")
@click.option("--name", required=True, help="Display name")
@click.option("--role", default="reference", type=click.Choice(["mine", "reference"]),
              help="'mine' = your channel, 'reference' = competitor")
def channels_add(key, channel_id, name, role):
    """Add a channel to the registry."""
    from src.analytics.tracker import load_channel_registry, save_channel_registry

    registry = load_channel_registry()
    registry[key] = {"channel_id": channel_id, "name": name, "role": role}
    save_channel_registry(registry)
    click.echo(f"✅ Added: {key} ({role}) → {name} [{channel_id}]")


@channels.command("list")
def channels_list():
    """List all registered channels."""
    from src.analytics.tracker import load_channel_registry

    registry = load_channel_registry()
    if not registry:
        click.echo("No channels registered. Add one:\n  python cli.py channels add --key mine --channel-id UCxxx --name 'My Channel' --role mine")
        return

    click.echo(f"{'KEY':<15} {'ROLE':<12} {'NAME':<30} CHANNEL_ID")
    click.echo("-" * 90)
    for key, info in registry.items():
        click.echo(f"{key:<15} {info['role']:<12} {info['name']:<30} {info['channel_id']}")


@channels.command("remove")
@click.option("--key", required=True)
def channels_remove(key):
    """Remove a channel from registry."""
    from src.analytics.tracker import load_channel_registry, save_channel_registry

    registry = load_channel_registry()
    if key not in registry:
        click.echo(f"Not found: {key}")
        return
    del registry[key]
    save_channel_registry(registry)
    click.echo(f"✅ Removed: {key}")


@channels.command("find-id")
@click.option("--handle", required=True, help="Channel handle like @Mysig.Sounds")
def channels_find_id(handle):
    """Find channel ID from a YouTube handle (@name)."""
    import urllib.request
    import re

    url = f"https://www.youtube.com/{handle}" if handle.startswith("@") else f"https://www.youtube.com/@{handle}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        html = urllib.request.urlopen(req, timeout=15).read().decode("utf-8", errors="ignore")
        match = re.search(r'"externalId":"(UC[^"]+)"', html) or re.search(r'"channelId":"(UC[^"]+)"', html)
        if match:
            click.echo(f"Channel ID: {match.group(1)}")
        else:
            click.echo("Channel ID not found in page")
    except Exception as e:
        click.echo(f"Error: {e}", err=True)


# ============================================================
# ANALYTICS: Performance analysis
# ============================================================
@cli.group()
def analytics():
    """Performance analytics commands."""
    pass


@analytics.command("fetch")
@click.option("--key", help="Channel key from registry (e.g. mine, mysig)")
@click.option("--all", "fetch_all", is_flag=True, help="Fetch all registered channels")
def analytics_fetch(key, fetch_all):
    """Fetch videos + stats for one or all registered channels."""
    from dotenv import load_dotenv
    load_dotenv(Path(__file__).parent / ".env")
    from src.analytics.fetcher import fetch_channel_all_videos
    from src.analytics.tracker import save_videos_meta, save_snapshot, load_channel_registry

    registry = load_channel_registry()
    if not registry:
        click.echo("No channels registered. Add with: python cli.py channels add ...", err=True)
        sys.exit(1)

    keys = list(registry.keys()) if fetch_all else [key]
    if not key and not fetch_all:
        click.echo("Specify --key or --all", err=True)
        sys.exit(1)

    for k in keys:
        if k not in registry:
            click.echo(f"Unknown channel key: {k}", err=True)
            continue
        info = registry[k]
        click.echo(f"\nFetching {k} ({info['name']})...")
        videos = fetch_channel_all_videos(info["channel_id"])
        click.echo(f"  Found {len(videos)} videos")
        save_videos_meta(k, videos)
        save_snapshot(k, videos)
        click.echo(f"  ✅ Saved")


@analytics.command("report")
@click.option("--key", help="Channel key (default: all)")
@click.option("--top", default=10, help="Top N by VPH")
@click.option("--keywords", default="", help="Comma-separated keywords to compare")
@click.option("--cross", is_flag=True, help="Show cross-channel top N")
def analytics_report(key, top, keywords, cross):
    """Generate performance report."""
    from src.analytics.analyzer import format_vph_report, format_keyword_report, format_cross_channel_top
    from src.analytics.tracker import list_channels

    if cross:
        click.echo(format_cross_channel_top(top))
    elif key:
        click.echo(format_vph_report(key, top))
    else:
        for ck in list_channels():
            click.echo(format_vph_report(ck, top))
            click.echo()

    if keywords:
        kw_list = [k.strip() for k in keywords.split(",")]
        click.echo("\n")
        click.echo(format_keyword_report(kw_list))


if __name__ == "__main__":
    cli()
