# [BFE.dev Problem 3 implement Array.prototype.flat()](https://bigfrontend.dev/problem/implement-Array-prototype.flat)

## Description
There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array. Please implement your own.

## Difficulty
medium

## Tags
implement it by yourself

## Approach

### Detecting holes in arrays
JavaScript arrays can have "holes" (sparse arrays), e.g. `[1, , 3]` has a hole at index 1.

- Use the `in` operator: `!(i in arr)` — if index `i` is not a property of `arr`, it's a hole
- **Avoid** `for...of` — yields `undefined` for holes
- **Avoid** `arr[i] === undefined` — can't distinguish holes from explicit `undefined` values
- Native `flat()` skips holes entirely → `continue` when we detect one

### Overall algorithm
Recursive flatten with a depth parameter (default `depth = 1` matches native `flat()`). For each element:

1. Skip holes via `!(i in arr)`
2. If it's an array and `depth > 0` → recurse with `depth - 1` and spread the result into the accumulator
3. Otherwise → push the element as-is
