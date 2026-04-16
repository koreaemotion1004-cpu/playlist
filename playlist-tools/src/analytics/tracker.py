from datetime import datetime, timezone
from pathlib import Path
from ..common.storage import save_json, load_json

ANALYTICS_DIR = Path(__file__).parent.parent.parent / "data" / "analytics"
CHANNELS_DIR = ANALYTICS_DIR / "channels"


def channel_dir(channel_key: str) -> Path:
    """Get directory for a specific channel's data."""
    d = CHANNELS_DIR / channel_key
    d.mkdir(parents=True, exist_ok=True)
    return d


def save_snapshot(channel_key: str, videos: list[dict]) -> Path:
    """Save today's snapshot for a specific channel."""
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    snapshot = {
        "date": today,
        "channel_key": channel_key,
        "fetched_at": datetime.now(timezone.utc).isoformat(),
        "stats": {
            v["video_id"]: {
                "views": v["views"],
                "likes": v["likes"],
                "comments": v["comments"],
            }
            for v in videos
        },
    }
    snapshot_path = channel_dir(channel_key) / "snapshots" / f"{today}.json"
    save_json(snapshot_path, snapshot)
    return snapshot_path


def save_videos_meta(channel_key: str, videos: list[dict]) -> Path:
    """Save video metadata for a specific channel."""
    meta = {
        v["video_id"]: {
            "title": v["title"],
            "published_at": v["published_at"],
            "tags": v["tags"],
            "duration": v["duration"],
        }
        for v in videos
    }
    meta_path = channel_dir(channel_key) / "videos.json"
    save_json(meta_path, meta)
    return meta_path


def load_videos_meta(channel_key: str) -> dict:
    path = channel_dir(channel_key) / "videos.json"
    if not path.exists():
        return {}
    return load_json(path)


def load_latest_snapshot(channel_key: str) -> dict | None:
    snap_dir = channel_dir(channel_key) / "snapshots"
    if not snap_dir.exists():
        return None
    snapshots = sorted(snap_dir.glob("*.json"))
    if not snapshots:
        return None
    return load_json(snapshots[-1])


def list_channels() -> list[str]:
    """List all tracked channel keys."""
    if not CHANNELS_DIR.exists():
        return []
    return sorted([d.name for d in CHANNELS_DIR.iterdir() if d.is_dir()])


def save_channel_registry(registry: dict) -> Path:
    """Save channel registry (key -> {channel_id, name, role}). """
    path = ANALYTICS_DIR / "channels.json"
    save_json(path, registry)
    return path


def load_channel_registry() -> dict:
    path = ANALYTICS_DIR / "channels.json"
    if not path.exists():
        return {}
    return load_json(path)
