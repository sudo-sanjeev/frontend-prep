# [BFE.dev Problem 32 - implement Promise.all()](https://bigfrontend.dev/problem/implement-Promise-all)

## Description

The [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.

Could you write your own `all()` that works the same as `Promise.all()`?

**Note:** Do not use `Promise.all()` directly.

## Difficulty

medium

## Tags

JavaScript, Promise, Async

## Approach

- Return a new Promise that resolves when all input promises resolve
- Resolve with an array of results in the same order as input
- Reject immediately if any promise rejects
- Use `Promise.resolve()` to handle non-Promise values (primitives, thenables)
- Empty input array resolves to `[]`

## Links

- [Problem](https://bigfrontend.dev/problem/implement-Promise-all)
- [Solution](https://bigfrontend.dev/solution/implement-Promise-all)
