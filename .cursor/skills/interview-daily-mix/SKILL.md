---
name: interview-daily-mix
description: >-
  Picks a daily frontend prep mix from two tracked lists in frontend-prep: BFE coding problems in
  README.md Must-Do Syllabus (list_coding_candidates.py) and verbal theory in THEORY-QUESTIONS.md
  (list_theory_candidates.py), plus web search for recently discussed interview topics. Use when the
  user asks for top questions today, daily frontend mix, or interview prep for the day. Not for
  DSA—use dsa-prep separately.
---

# Frontend daily mix (coding + theory)

## Goal

Return **one daily plan** that combines:

1. **Coding problems** — rows from **`README.md`** → **Must-Do Syllabus** tables (BFE `/problem/` links), not marked ✓.
2. **Theory (verbal)** — rows from **`THEORY-QUESTIONS.md`** (BFE `/question/` links), not marked ✓.

Use **`list_coding_candidates.py`** and **`list_theory_candidates.py`** as the **allowed pools**, then **2–5 web searches** to **rank**, **break ties**, and add **short “trend” rationales** where helpful.

**Do not** pull LeetCode / Striver / **dsa-prep** here—that is **`dsa-daily-top-five`** in **dsa-prep** only.

## Default sizes (adjust if the user asks)

| Slice | Count | Source |
| ----- | ----- | ------ |
| Coding (README syllabus) | **3** | `scripts/list_coding_candidates.py` |
| Theory (THEORY-QUESTIONS) | **2** | `scripts/list_theory_candidates.py` |
| **Total** | **5** | One coherent day |

Alternate mixes: **2 + 3** (theory-heavy), **4 + 1** (coding-heavy), or **3 + 3 = 6** when the user wants more.

## Steps

1. **Repo root** — Folder containing **`README.md`**, **`THEORY-QUESTIONS.md`**, and **`scripts/list_*_candidates.py`**.

2. **Coding pool** — Run:

   ```bash
   python3 scripts/list_coding_candidates.py
   ```

3. **Theory pool** — Run:

   ```bash
   python3 scripts/list_theory_candidates.py
   ```

   Every **default** pick must map to a row in the corresponding script output (same **#** + link as in the markdown tables).

4. **Prioritize**

   - **Coding:** **`○` before `-`** → **breadth** across phases (aim for **≥2 phases** in the three picks when possible) → difficulty mix (avoid three `hard` unless unavoidable).
   - **Theory:** Prefer **Phase 1 & 3** early unless the user is past them → **`○` before `-`** → spread phases when useful.

5. **Web research** — Examples:

   - “frontend JavaScript interview 2026 promises event loop”
   - “BFE bigfrontend interview coding”
   - “front end interview HTTP CORS” (if network theory or related coding is in play)

   Use to **align** picks with what people report recently; **do not** replace tracked rows with random off-list links unless the user asks for **optional extras**.

6. **Optional extras** — Section **“Outside your tables”** with 1–2 links, labeled clearly.

## Output template

```markdown
## Frontend daily mix — [weekday, YYYY-MM-DD]

**Plan:** 3 coding (README) + 2 theory (THEORY-QUESTIONS)

### Coding — README Must-Do Syllabus

| # | Phase | Problem | Difficulty | Link | Why today |
|---|-------|---------|------------|------|-----------|
| 1 | … | … | … | … | … |

### Theory — THEORY-QUESTIONS

| # | Phase | Question | Difficulty | Link | Why today |
|---|-------|----------|------------|------|-----------|
| 1 | … | … | … | … | … |

**Suggested order:** [e.g. one theory → coding → theory → coding blocks]

**Stretch (optional):** [one row from either pool]

**Web searches used:** [short query list]

**Note:** Coding picks map to **README.md** syllabus rows; theory picks map to **THEORY-QUESTIONS.md**.
```

## Rules

- Default **coding** picks ⊆ **`list_coding_candidates.py`** output; **theory** ⊆ **`list_theory_candidates.py`** output.
- If a pool is too small, say so and list everything available.
- **Web search** supplements ranking and recency—not a silent swap of the main list.

## Related (outside this repo)

- **DSA / LeetCode:** **`dsa-daily-top-five`** in **dsa-prep**.
