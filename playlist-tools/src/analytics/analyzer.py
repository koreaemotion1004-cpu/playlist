from datetime import datetime, timezone
from .tracker import load_videos_meta, load_latest_snapshot, list_channels, load_channel_registry


def parse_iso_datetime(iso_str: str) -> datetime:
    if iso_str.endswith("Z"):
        iso_str = iso_str[:-1] + "+00:00"
    return datetime.fromisoformat(iso_str)


def calc_vph(views: int, published_at: str) -> float:
    published = parse_iso_datetime(published_at)
    now = datetime.now(timezone.utc)
    hours = (now - published).total_seconds() / 3600
    if hours < 1:
        hours = 1
    return views / hours


def compute_performance(channel_key: str) -> list[dict]:
    """Compute VPH for each video in a channel."""
    meta = load_videos_meta(channel_key)
    snapshot = load_latest_snapshot(channel_key)
    if not meta or not snapshot:
        return []

    stats = snapshot.get("stats", {})
    results = []
    for video_id, m in meta.items():
        s = stats.get(video_id, {})
        views = s.get("views", 0)
        results.append({
            "channel_key": channel_key,
            "video_id": video_id,
            "title": m["title"],
            "published_at": m["published_at"],
            "tags": m.get("tags", []),
            "views": views,
            "likes": s.get("likes", 0),
            "comments": s.get("comments", 0),
            "vph": round(calc_vph(views, m["published_at"]), 2),
            "engagement_rate": round(
                (s.get("likes", 0) + s.get("comments", 0)) / max(views, 1) * 100, 2
            ),
        })
    return sorted(results, key=lambda x: x["vph"], reverse=True)


def keyword_analysis(keywords: list[str], channel_keys: list[str] | None = None) -> dict:
    """Group videos by keyword across one or more channels."""
    if channel_keys is None:
        channel_keys = list_channels()

    all_videos = []
    for ck in channel_keys:
        all_videos.extend(compute_performance(ck))

    if not all_videos:
        return {}

    result = {}
    for kw in keywords:
        matching = [v for v in all_videos if kw.lower() in v["title"].lower()]
        if not matching:
            result[kw] = {"count": 0, "avg_vph": 0, "total_views": 0}
            continue
        result[kw] = {
            "count": len(matching),
            "avg_vph": round(sum(v["vph"] for v in matching) / len(matching), 2),
            "total_views": sum(v["views"] for v in matching),
            "top_title": matching[0]["title"],
            "top_vph": matching[0]["vph"],
            "top_channel": matching[0]["channel_key"],
        }
    return result


def format_vph_report(channel_key: str, top_n: int = 10) -> str:
    """Top N videos for one channel by VPH."""
    perf = compute_performance(channel_key)
    if not perf:
        return f"No data for channel '{channel_key}'. Run: `python cli.py analytics fetch --key {channel_key} --channel-id UCxxx...`"

    registry = load_channel_registry()
    channel_name = registry.get(channel_key, {}).get("name", channel_key)

    lines = [f"# Performance Report - {channel_name} ({channel_key})\n"]
    lines.append("| Rank | Title | Views | VPH | Engagement |")
    lines.append("|------|-------|-------|-----|-----------|")
    for i, v in enumerate(perf[:top_n], 1):
        title = v["title"][:60] + ("…" if len(v["title"]) > 60 else "")
        lines.append(f"| {i} | {title} | {v['views']:,} | {v['vph']} | {v['engagement_rate']}% |")
    return "\n".join(lines)


def format_cross_channel_top(top_n: int = 10, channel_keys: list[str] | None = None) -> str:
    """Top N videos across multiple channels by VPH."""
    if channel_keys is None:
        channel_keys = list_channels()

    all_videos = []
    for ck in channel_keys:
        all_videos.extend(compute_performance(ck))

    if not all_videos:
        return "No data. Fetch channels first."

    all_videos.sort(key=lambda x: x["vph"], reverse=True)
    registry = load_channel_registry()

    lines = [f"# Cross-Channel Top {top_n} by VPH\n"]
    lines.append("| Rank | Channel | Title | Views | VPH |")
    lines.append("|------|---------|-------|-------|-----|")
    for i, v in enumerate(all_videos[:top_n], 1):
        ch = registry.get(v["channel_key"], {}).get("name", v["channel_key"])
        title = v["title"][:50] + ("…" if len(v["title"]) > 50 else "")
        lines.append(f"| {i} | {ch} | {title} | {v['views']:,} | {v['vph']} |")
    return "\n".join(lines)


def format_keyword_report(keywords: list[str], channel_keys: list[str] | None = None) -> str:
    analysis = keyword_analysis(keywords, channel_keys)
    if not analysis:
        return "No data."

    registry = load_channel_registry()
    lines = ["# Keyword Performance Report\n"]
    lines.append("| Keyword | Video Count | Avg VPH | Total Views | Top (Channel) |")
    lines.append("|---------|-------------|---------|-------------|---------------|")
    for kw, data in sorted(analysis.items(), key=lambda x: x[1]["avg_vph"], reverse=True):
        top = data.get("top_title", "-")
        if top and len(top) > 40:
            top = top[:40] + "…"
        ch = registry.get(data.get("top_channel", ""), {}).get("name", data.get("top_channel", "-"))
        lines.append(
            f"| {kw} | {data['count']} | {data['avg_vph']} | {data['total_views']:,} | {top} ({ch}) |"
        )
    return "\n".join(lines)
