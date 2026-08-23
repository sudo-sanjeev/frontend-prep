---
name: interview-daily-mix
description: >-
   Picks a daily frontend coding plan from the BFE coding problems tracked in frontend-prep's
   README.md Must-Do Syllabus (list_coding_candidates.py), plus web search for recently discussed
   interview topics. Use when the user asks for top questions today, daily coding mix, or interview
   prep for the day. Not for DSA—use dsa-prep separately.
---

# Frontend daily coding mix

## Goal

Return **one daily plan** from:

1. **Coding problems** — rows from **`README.md`** → **Must-Do Syllabus** tables (BFE `/problem/` links), not marked ✓.

Use **`list_coding_candidates.py`** as the **allowed pool**, then **2–5 web searches** to **rank** and add **short “trend” rationales** where helpful.

**Do not** pull LeetCode / Striver / **dsa-prep** here—that is **`dsa-daily-top-five`** in **dsa-prep** only.

## Default sizes (adjust if the user asks)

| Slice | Count | Source |
| ----- | ----- | ----- |
| Coding (README syllabus) | **5** | `scripts/list_coding_candidates.py` |

## Steps

1. **Repo root** — Folder containing **`README.md`** and **`scripts/list_coding_candidates.py`**.

2. **Coding pool** — Run:

   ```bash
   python3 scripts/list_coding_candidates.py
   ```

3. **Prioritize**

   - **Coding:** **`○` before `-`** → **breadth** across phases (aim for **≥2 phases** in the five picks when possible) → difficulty mix (avoid three `hard` unless unavoidable).

4. **Web research** — Examples:

   - “frontend JavaScript interview 2026 promises event loop”
   - “BFE bigfrontend interview coding”
   - “front end interview JavaScript coding questions”

   Use to **align** picks with what people report recently; **do not** replace tracked rows with random off-list links unless the user asks for **optional extras**.

6. **Optional extras** — Section **“Outside your tables”** with 1–2 links, labeled clearly.

## Output template

```markdown
## Frontend daily mix — [weekday, YYYY-MM-DD]

**Plan:** 5 coding problems from the README syllabus

### Coding — README Must-Do Syllabus

| # | Phase | Problem | Difficulty | Link | Why today |
|---|-------|---------|------------|------|-----------|
| 1 | … | … | … | … | … |

**Suggested order:** [e.g. easier warm-up → focused practice → harder problem]

**Stretch (optional):** [one additional coding row]

**Web searches used:** [short query list]

**Note:** Coding picks map to **README.md** syllabus rows.
```

## Rules

- Default **coding** picks ⊆ **`list_coding_candidates.py`** output.
- If a pool is too small, say so and list everything available.
- **Web search** supplements ranking and recency—not a silent swap of the main list.

## Related (outside this repo)

- **DSA / LeetCode:** **`dsa-daily-top-five`** in **dsa-prep**.
