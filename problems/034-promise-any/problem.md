# [BFE.dev Problem 34 - implement Promise.any()](https://bigfrontend.dev/problem/implement-Promise-any)

## Description

From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any):

`Promise.any()` takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfils, returns a single promise that resolves with the value from that promise.

Can you implement an `any()` that works the same as `Promise.any()`?

**Note:** When all promises reject, reject with `AggregateError`:

```js
new AggregateError(
  'No Promise in Promise.any was resolved',
  errors  // array of rejection reasons
)
```

## Difficulty

medium

## Tags

JavaScript, Promise, Async

## Approach

- Return a new Promise that resolves with the first fulfilled value
- Reject only when **all** promises reject — use `AggregateError` with the errors array
- Use `Promise.resolve()` to handle non-Promise values
- Empty input array rejects immediately with `AggregateError`

## Links

- [Problem](https://bigfrontend.dev/problem/implement-Promise-any)
- [Solution](https://bigfrontend.dev/solution/implement-Promise-any)
