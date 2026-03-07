# [BFE.dev Problem 123 - implement Promise.prototype.finally()](https://bigfrontend.dev/problem/implement-Promise-prototype-finally)

## Description

[Promise.prototype.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) runs a callback when a promise is settled (either fulfilled or rejected).

The callback passed to `finally()` does not receive any argument and does not modify the value in the promise chain (including rejection reason).

## Difficulty

medium

## Tags

JavaScript, Promise

## Approach

- Use `promise.then(onFulfilled, onRejected)` with both handlers
- In both handlers: await `onFinally()`, then return the original value/reason
- Callback runs regardless of fulfillment or rejection
- Preserves the original resolution/rejection in the returned promise

## Links

- [Problem](https://bigfrontend.dev/problem/implement-Promise-prototype-finally)
- [Solution](https://bigfrontend.dev/solution/implement-Promise-prototype-finally)
