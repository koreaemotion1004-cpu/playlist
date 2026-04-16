import json
from pathlib import Path
from ..common.claude_cli import call_claude, parse_json_response, is_claude_cli_available
from ..common.storage import ensure_project_dir, save_json, save_text

PROMPTS_DIR = Path(__file__).parent.parent.parent / "prompts"


def format_timeline(songs: list[dict]) -> str:
    """Generate timeline string from songs with durations."""
    lines = []
    t = 0.0
    for song in songs:
        m = int(t // 60)
        s = int(t % 60)
        lines.append(f"{m:02d}:{s:02d} {song['title']}")
        t += song.get("duration_sec", 0)
    return "\n".join(lines)


def build_user_prompt(
    songs: list[dict],
    reference_titles: list[str],
    timeline: str,
    extra_mood: str = "",
) -> str:
    song_titles = "\n".join(f"- {s['title']}" for s in songs)
    refs = "\n".join(f"{chr(65+i)}. {t}" for i, t in enumerate(reference_titles))

    extra_mood_section = f"\n## Additional Mood Keywords\n{extra_mood}\n" if extra_mood else ""

    return f"""You are a YouTube algorithm expert with 30 years of experience.

## HIGH-VPH REFERENCE TITLES (from successful videos)
{refs}

## YOUR MISSION
Create a NEW title by combining the core keywords from the reference titles above.

**CRITICAL SUCCESS CRITERION:**
When I search the new title on YouTube in incognito mode, the 2 reference titles above MUST appear in the search results. This means the new title MUST share distinctive keywords with BOTH references.

Do NOT invent unrelated new keywords. Reuse and recombine the keywords from A and B.

## CHECKLIST (your output must pass ALL):
- [ ] Title does NOT start with any brand prefix like 【途中広告なし】 or 【...】
- [ ] Title contains ☕ emoji
- [ ] Title has TWO ｜ (full-width bar) separating 3 sections
- [ ] English section reuses ALL CAPS keywords from references (e.g., WARM, HAPPY, JAZZ, CAFE)
- [ ] Japanese section reuses distinctive Japanese phrases from references
- [ ] 用途 section (e.g., 作業用BGM, 読書BGM)
- [ ] Tags array includes keywords from BOTH reference A and B
- [ ] Description includes the provided timeline exactly
{extra_mood_section}
## INPUT DATA

Songs ({len(songs)} tracks):
{song_titles}

Timeline (use this EXACTLY in description):
{timeline}

## OUTPUT
Return ONLY the JSON object. Start directly with {{ and end with }}. No prose, no markdown fences.
Include a `keyword_overlap_explanation` field explaining which keywords you took from A vs B."""


def generate_metadata(
    project_name: str,
    songs: list[dict],
    reference_titles: list[str],
    extra_mood: str = "",
) -> dict:
    """Generate YouTube metadata using 2 reference titles as keyword base.

    Args:
        project_name: Project identifier
        songs: [{"title": str, "duration_sec": float}, ...]
        reference_titles: [title_A, title_B] - high-VPH reference titles
        extra_mood: optional extra mood keywords

    Returns:
        Dict with title, description, tags, pinned_comment, keyword_overlap_explanation
    """
    if len(reference_titles) < 2:
        raise ValueError("Need at least 2 reference titles (A and B)")

    system_prompt = (PROMPTS_DIR / "metadata_system.md").read_text(encoding="utf-8")
    timeline = format_timeline(songs)
    user_prompt = build_user_prompt(songs, reference_titles, timeline, extra_mood)

    project_dir = ensure_project_dir(project_name)
    save_json(project_dir / "input.json", {
        "project_name": project_name,
        "songs": songs,
        "reference_titles": reference_titles,
        "extra_mood": extra_mood,
        "timeline": timeline,
    })

    if is_claude_cli_available():
        response = call_claude(user_prompt, system_prompt, output_format="text")
        metadata = parse_json_response(response)
    else:
        save_text(project_dir / "user_prompt.txt", user_prompt)
        save_text(project_dir / "system_prompt.txt", system_prompt)
        raise RuntimeError(
            f"claude CLI not installed.\n"
            f"Prompts saved to: {project_dir}\n"
        )

    save_json(project_dir / "output.json", metadata)
    return metadata
