# [BFE.dev Problem 35 - implement Promise.race()](https://bigfrontend.dev/problem/implement-Promise-race)

## Description

The `Promise.race()` method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

[source: MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

Can you create a `race()` which works the same as `Promise.race()`?

## Difficulty

easy

## Tags

JavaScript, Promise

## Approach

- Use `Promise.resolve()` to handle non-Promise values
- First to settle (resolve or reject) wins — call `resolve` or `reject` immediately
- No need to cancel other promises once one settles

## Links

- [Problem](https://bigfrontend.dev/problem/implement-Promise-race)
- [Solution](https://bigfrontend.dev/solution/implement-Promise-race)
