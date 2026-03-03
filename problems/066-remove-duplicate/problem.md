# [BFE.dev Problem 66 - remove duplicates from an array](https://bigfrontend.dev/problem/remove-duplicates-from-an-array)

## Description

Given an array containing all kinds of data (primitives, objects, etc.), implement a function `deduplicate()` to remove duplicates.

- **Modify the array in place**
- **Order doesn't matter**

What is the time & space cost of your approach?

## Difficulty

medium

## Tags

JavaScript, Algorithm, Array

## Signature

```js
/**
 * @param {any[]} arr
 * @returns {any[]}
 */
function deduplicate(arr) { ... }
```

## Edge cases to consider

- Primitives: numbers, strings, null, undefined, NaN
- Objects: compared by reference (same object = duplicate; `{a:1}` and `{a:1}` are different)
- Empty array
- All unique / all duplicates

## Links

- [Problem](https://bigfrontend.dev/problem/remove-duplicates-from-an-array)
