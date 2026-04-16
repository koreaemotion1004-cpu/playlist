import subprocess
import shutil
import sys
import json
from pathlib import Path


def find_claude_cli() -> str | None:
    """Find claude CLI executable (handles Windows .cmd wrapper)."""
    # shutil.which finds .cmd on Windows
    path = shutil.which("claude")
    if path:
        return path
    # Windows fallback
    if sys.platform == "win32":
        for suffix in (".cmd", ".exe", ".bat"):
            path = shutil.which(f"claude{suffix}")
            if path:
                return path
    return None


def is_claude_cli_available() -> bool:
    return find_claude_cli() is not None


def call_claude(
    user_prompt: str,
    system_prompt: str,
    model: str = "sonnet",
    output_format: str = "text",
    timeout: int = 300,
) -> str:
    """Call Claude CLI with stdin pipe for user prompt."""
    claude_path = find_claude_cli()
    if not claude_path:
        raise RuntimeError(
            "claude CLI not found. Install it with: npm install -g @anthropic-ai/claude-code"
        )

    cmd = [
        claude_path,
        "-p",
        "--system-prompt", system_prompt,
        "--model", model,
    ]
    if output_format == "json":
        cmd.extend(["--output-format", "json"])

    proc = subprocess.run(
        cmd,
        input=user_prompt,
        capture_output=True,
        text=True,
        encoding="utf-8",
        timeout=timeout,
        shell=(sys.platform == "win32"),
    )

    if proc.returncode != 0:
        raise RuntimeError(f"Claude CLI error: {proc.stderr}")

    if output_format == "json":
        envelope = json.loads(proc.stdout)
        return envelope.get("result", "")
    return proc.stdout.strip()


def parse_json_response(text: str) -> dict:
    """Extract JSON from Claude response (handles markdown fences)."""
    text = text.strip()
    if text.startswith("```json"):
        text = text[7:]
    elif text.startswith("```"):
        text = text[3:]
    if text.endswith("```"):
        text = text[:-3]
    text = text.strip()

    # Find first { to last }
    start = text.find("{")
    end = text.rfind("}")
    if start == -1 or end == -1:
        raise ValueError(f"No JSON object found in response: {text[:200]}")
    return json.loads(text[start:end + 1])
