# [BFE.dev Problem 33 - implement Promise.allSettled()](https://bigfrontend.dev/problem/implement-Promise-allSettled)

## Description

The [Promise.allSettled()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

Unlike `Promise.all()` which rejects as soon as one promise rejects, `Promise.allSettled()` waits for all promises to settle.

Can you implement your own `allSettled()`?

**Note:** Do not use `Promise.allSettled()` directly.

## Difficulty

medium

## Tags

JavaScript, Promise, Async

## Approach

- Return a new Promise that resolves when all input promises settle (fulfill or reject)
- Resolve with an array of result objects in the same order as input
- Each fulfilled promise → `{ status: 'fulfilled', value }`
- Each rejected promise → `{ status: 'rejected', reason }`
- Use `Promise.resolve()` to handle non-Promise values
- Empty input array resolves to `[]`
- Never rejects (unlike `Promise.all`)

## Links

- [Problem](https://bigfrontend.dev/problem/implement-Promise-allSettled)
- [Solution](https://bigfrontend.dev/solution/implement-Promise-allSettled)
