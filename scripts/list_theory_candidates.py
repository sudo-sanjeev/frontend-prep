#!/usr/bin/env python3
"""List non-mastered rows from THEORY-QUESTIONS.md (BFE syllabus tables)."""
from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
THEORY = ROOT / "THEORY-QUESTIONS.md"

# Markdown table row: | # | [title](url) | diff | status | last | next |
ROW_RE = re.compile(
    r"^\|\s*(\d+)\s*\|\s*(\[[^\]]+\]\([^)]+\))\s*\|\s*(\w+)\s*\|\s*([✓○\-])\s*\|"
)


def parse_rows() -> list[dict]:
    if not THEORY.is_file():
        return []
    phase = "General"
    rows: list[dict] = []
    for line in THEORY.read_text(encoding="utf-8").splitlines():
        if line.startswith("### Phase"):
            phase = line.replace("###", "").strip()
        m = ROW_RE.match(line.strip())
        if not m:
            continue
        num, link_cell, difficulty, status = m.groups()
        if status == "✓":
            continue
        title_m = re.match(r"\[([^\]]+)\]", link_cell)
        url_m = re.search(r"\((https://[^)]+)\)", link_cell)
        rows.append(
            {
                "num": int(num),
                "title": title_m.group(1) if title_m else link_cell,
                "url": url_m.group(1) if url_m else "",
                "difficulty": difficulty,
                "status": status,
                "phase": phase,
            }
        )
    return rows


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--format", choices=("md", "json"), default="md")
    args = p.parse_args()
    rows = parse_rows()
    if args.format == "json":
        json.dump(rows, sys.stdout, indent=2, ensure_ascii=False)
        sys.stdout.write("\n")
        return
    print(f"Theory candidates: **{len(rows)}** rows (not ✓). File: `{THEORY}`\n")
    today = date.today().isoformat()
    for r in rows:
        print(
            f"- **{r['phase']}** | #{r['num']} | {r['difficulty']} | `{r['status']}` | "
            f"[{r['title'][:70]}{'…' if len(r['title']) > 70 else ''}]({r['url']})"
        )
    print()
    print(f"_As of {today}._\n")


if __name__ == "__main__":
    main()
