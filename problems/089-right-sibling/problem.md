# [BFE.dev Problem 89 - Next Right Sibling](https://bigfrontend.dev/problem/Next-Right-Sibiling)

## Description

Given a DOM tree and a target element, return the **next right sibling** — the element immediately to the right of the target at the same level.

```
    div
   / | \
  p  span  section
```

- `nextRightSibling(root, p)` → `span`
- `nextRightSibling(root, span)` → `section`
- `nextRightSibling(root, section)` → `null`

## Difficulty

easy

## Tags

JavaScript, DOM, Algorithm

## Approach

- Traverse the DOM **level by level** (BFS)
- For each level, build an array of nodes in left-to-right order
- If target is found at index `i`, return `level[i + 1]` or `null` if it's the last in the level

## Links

- [Problem](https://bigfrontend.dev/problem/Next-Right-Sibiling)
- [Solution](https://bigfrontend.dev/solution/Next-Right-Sibiling)
