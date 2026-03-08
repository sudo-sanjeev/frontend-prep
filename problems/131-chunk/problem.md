# [BFE.dev Problem 131 - implement _.chunk()](https://bigfrontend.dev/problem/implement-lodash-chunk)

## Description

[_.chunk()](https://lodash.com/docs/4.17.15#chunk) splits an array into groups of the specified size.

Implement `chunk(arr, size)`:

```js
chunk([1, 2, 3, 4, 5], 1)  // [[1], [2], [3], [4], [5]]
chunk([1, 2, 3, 4, 5], 2)  // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5], 3)  // [[1, 2, 3], [4, 5]]
chunk([1, 2, 3, 4, 5], 4)  // [[1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 5)  // [[1, 2, 3, 4, 5]]
```

For size smaller than 1, return an empty array.

## Difficulty

medium

## Tags

JavaScript, Lodash, Array

## Approach

- Early return `[]` when `size < 1`
- Iterate with `i += size`, use `arr.slice(i, i + size)` for each chunk
- Last chunk may be smaller than `size`

## Links

- [Problem](https://bigfrontend.dev/problem/implement-lodash-chunk)
- [Solution](https://bigfrontend.dev/solution/implement-lodash-chunk)
