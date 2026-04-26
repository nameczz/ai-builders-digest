"""Shared Codex CLI helpers for runtime summarization/editing calls."""
from __future__ import annotations

import shutil
import subprocess
import tempfile
from pathlib import Path

from .config import CODEX_BIN, CODEX_MODEL, REPO_ROOT


def has_codex() -> bool:
    return bool(shutil.which(CODEX_BIN))


def call_codex(prompt: str, *, timeout: int = 600, model: str | None = CODEX_MODEL) -> str:
    """Run a one-shot Codex CLI prompt and return the final assistant message."""
    output_path: Path | None = None
    try:
        with tempfile.NamedTemporaryFile(prefix="aibd-codex-", suffix=".txt", delete=False) as tmp:
            output_path = Path(tmp.name)

        cmd = [
            CODEX_BIN,
            "exec",
            "--cd",
            str(REPO_ROOT),
            "--sandbox",
            "read-only",
            "--ephemeral",
            "--color",
            "never",
            "--output-last-message",
            str(output_path),
        ]
        if model:
            cmd.extend(["--model", model])
        cmd.append("-")

        proc = subprocess.run(
            cmd,
            input=prompt,
            capture_output=True,
            text=True,
            timeout=timeout,
        )
        if proc.returncode != 0:
            stderr = proc.stderr.strip() or proc.stdout.strip()
            raise RuntimeError(stderr[:500] or f"codex exited with status {proc.returncode}")

        final = output_path.read_text(encoding="utf-8").strip() if output_path.exists() else ""
        return final or proc.stdout.strip()
    finally:
        if output_path and output_path.exists():
            output_path.unlink()
