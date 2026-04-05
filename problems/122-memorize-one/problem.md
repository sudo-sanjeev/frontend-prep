# [BFE.dev Problem 122 - implement `memoizeOne()`](https://bigfrontend.dev/problem/implement-memoizeOne)

## Description

Implement `memoizeOne(func, isEqual?)`.

Like [memoize-one](https://www.npmjs.com/package/memoize-one), the wrapper remembers **only the last call**: if the next invocation has the same “inputs” as that call, it returns the cached result without running `func` again. Otherwise it runs `func`, stores the new result, and updates what counts as “last.”

Behavior to cover:

- **Default equality:** treat two calls as the same when they have the same number of arguments and each argument is `===` to the one in the same position (reference equality).
- **`this`:** a cache hit should require the same `this` as the last successful computation (use `func.call(this, ...args)` so the wrapped function sees the correct receiver).
- **Custom `isEqual`:** optional second argument `(newArgs, lastArgs) => boolean` to decide whether the new arguments match the previous ones; when it returns `true`, return the cached value.

This is narrower than a full `memo()` map: at most one cached entry, which is cheap and predictable for selectors and event handlers.

## Difficulty

medium

## Tags

JavaScript, Lodash, memoization

## Example

```js
let callCount = 0;
function add(a, b) {
  callCount++;
  return a + b;
}

const memoized = memoizeOne(add);

memoized(1, 2); // 3, callCount === 1
memoized(1, 2); // 3, callCount === 1 — cache hit
memoized(2, 3); // 5, callCount === 2 — new args, recompute
memoized(1, 2); // 3, callCount === 3 — last stored was (2,3), so miss
```

## Approach

- Keep `lastArgs`, `lastThis`, and `lastResult` (or `cache`) in a closure.
- On each call, if `lastArgs` is set, `this === lastThis`, and `isEqual` (or default `===` per index) says the args match `lastArgs`, return `lastResult`.
- Otherwise assign `lastThis`, `lastArgs`, set `lastResult = func.call(this, ...args)`, and return it.

## Links

- [Problem](https://bigfrontend.dev/problem/implement-memoizeOne)
- [Solution](https://bigfrontend.dev/solution/implement-memoizeOne)
