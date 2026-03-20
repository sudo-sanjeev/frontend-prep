# [BFE.dev Problem 104 - Traverse DOM level by level](https://bigfrontend.dev/problem/Traverse-DOM-level-by-level)

## Description

Given a DOM tree, flatten it into a one-dimensional array in **level-by-level order** (BFS).

```
     <div>
    /   |   \
  <p>  <span> <section>
  / \     |       |
 <a> <b> <c>    <div>
```

Result: `[div, p, span, section, a, b, c, div]`

## Difficulty

medium

## Tags

JavaScript, Algorithm, DOM

## Approach

- Use a **queue** (BFS)
- Start with root, enqueue it
- While queue not empty: dequeue front, push to result, enqueue all `front.children`
- `children` returns only element nodes (not text nodes)

## Links

- [Problem](https://bigfrontend.dev/problem/Traverse-DOM-level-by-level)
- [Solution](https://bigfrontend.dev/solution/Traverse-DOM-level-by-level)
