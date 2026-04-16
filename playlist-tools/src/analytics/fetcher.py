import os
from datetime import datetime
from googleapiclient.discovery import build


def get_youtube_client(api_key: str | None = None):
    """Create YouTube Data API v3 client."""
    api_key = api_key or os.environ.get("YOUTUBE_API_KEY")
    if not api_key:
        raise RuntimeError("YOUTUBE_API_KEY not set in .env")
    return build("youtube", "v3", developerKey=api_key)


def get_channel_uploads_playlist_id(youtube, channel_id: str) -> str:
    """Get the 'uploads' playlist ID for a channel."""
    resp = youtube.channels().list(
        part="contentDetails",
        id=channel_id,
    ).execute()
    items = resp.get("items", [])
    if not items:
        raise RuntimeError(f"Channel not found: {channel_id}")
    return items[0]["contentDetails"]["relatedPlaylists"]["uploads"]


def fetch_all_video_ids(youtube, uploads_playlist_id: str) -> list[str]:
    """Fetch all video IDs from uploads playlist."""
    video_ids = []
    next_page = None
    while True:
        resp = youtube.playlistItems().list(
            part="contentDetails",
            playlistId=uploads_playlist_id,
            maxResults=50,
            pageToken=next_page,
        ).execute()
        for item in resp.get("items", []):
            video_ids.append(item["contentDetails"]["videoId"])
        next_page = resp.get("nextPageToken")
        if not next_page:
            break
    return video_ids


def fetch_video_details(youtube, video_ids: list[str]) -> list[dict]:
    """Fetch statistics and metadata for multiple videos (batched 50 at a time)."""
    results = []
    for i in range(0, len(video_ids), 50):
        batch = video_ids[i:i + 50]
        resp = youtube.videos().list(
            part="snippet,statistics,contentDetails",
            id=",".join(batch),
        ).execute()
        for item in resp.get("items", []):
            snippet = item["snippet"]
            stats = item.get("statistics", {})
            results.append({
                "video_id": item["id"],
                "title": snippet["title"],
                "published_at": snippet["publishedAt"],
                "tags": snippet.get("tags", []),
                "description": snippet.get("description", ""),
                "duration": item["contentDetails"].get("duration", ""),
                "views": int(stats.get("viewCount", 0)),
                "likes": int(stats.get("likeCount", 0)),
                "comments": int(stats.get("commentCount", 0)),
            })
    return results


def fetch_channel_all_videos(channel_id: str, api_key: str | None = None) -> list[dict]:
    """High-level function: fetch all videos with stats for a channel."""
    youtube = get_youtube_client(api_key)
    uploads_id = get_channel_uploads_playlist_id(youtube, channel_id)
    video_ids = fetch_all_video_ids(youtube, uploads_id)
    return fetch_video_details(youtube, video_ids)
