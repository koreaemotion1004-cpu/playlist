def format_youtube_md(metadata: dict) -> str:
    """Format metadata as youtube.md (ready to copy-paste)."""
    tags_str = ", ".join(metadata.get("tags", []))
    return f"""# YouTube Metadata

## Title
{metadata.get("title", "")}

## Description
{metadata.get("description", "")}

## Tags
{tags_str}

## Pinned Comment
{metadata.get("pinned_comment", "")}
"""
