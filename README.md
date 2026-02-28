# frontend-prep

Preparation for [BFE.dev](https://bfe.dev) frontend interview questions. Solutions, notes, and practice code.

## Structure

```
frontend-prep/
├── problems/                    # BFE.dev solutions
│   ├── _template/               # Copy this when starting a new problem
│   │   ├── problem.md          # Problem description & notes
│   │   ├── solution.js         # Your implementation
│   │   └── solution.test.js    # Tests
│   ├── 001-implement-curry/
│   ├── 006-implement-basic-debounce/
│   └── ...                     # 002, 003, ... (BFE problem numbers)
├── PROGRESS.md                 # Track solved problems
├── package.json
└── vitest.config.js
```

## Workflow

1. **Pick a problem** from [BFE.dev](https://bigfrontend.dev/problem) (filter by JavaScript)
2. **Create a folder** `problems/NNN-slug/` (e.g. `007-implement-debounce-with-options`)
3. **Copy the template:**
   ```bash
   cp -r problems/_template problems/007-implement-debounce-with-options
   ```
4. **Fill in** `problem.md` with the description, then implement in `solution.js`
5. **Add tests** in `solution.test.js` and run `npm test`
6. **Update** `PROGRESS.md` when done

## Commands

```bash
npm install
npm test                    # Run all tests
npm run test:watch          # Watch mode
npm run test:problem 001    # Run tests for problem 001 only
```

## Study Plan

Suggested order by topic (often asked in interviews):

| Week | Topic | Problems |
|------|-------|----------|
| 1 | **Functions** | 1, 2, 6, 7, 4, 5, 11, 14, 46 |
| 2 | **Promises & Async** | 67, 32, 33, 34, 35, 56, 64, 92, 159 |
| 3 | **Array & Object** | 3, 66, 85, 86, 146, 151, 63, 69 |
| 4 | **DOM** | 89, 104, 117, 19 |
| 5 | **Algorithm** | 37, 40–44, 47, 81, 87, 100 |
| 6 | **System Design** | 16, 52, 57, 59 |

## Tips

- Solve without looking at BFE solution first
- Add edge-case tests
- Revisit problems after a few days to reinforce
- Use `PROGRESS.md` to track and prioritize
