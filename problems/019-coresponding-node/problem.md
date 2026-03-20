# [BFE.dev Problem 19 - find corresponding node in two identical DOM trees](https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree)

## Description

Given two identical DOM trees A and B, and an element `nodeA` in A, find the **corresponding element** in B.

By corresponding, we mean `nodeA` and the result have the **same relative position** to their DOM tree root.

**Follow-up:** Solve recursively and iteratively. Consider DOM APIs for better performance.

## Difficulty

easy

## Tags

JavaScript, DOM, Algorithm

## Approach

- **BFS (iterative):** Use two queues, traverse both trees in sync. When `nodeA` is found in queue A, return the paired node from queue B.
- **DFS (recursive):** Recurse on matching children; when `rootA === nodeA`, return `rootB`.

## Links

- [Problem](https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree)
- [Solution](https://bigfrontend.dev/solution/find-corresponding-node-in-two-identical-DOM-tree)
