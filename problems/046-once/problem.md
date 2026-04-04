# [BFE.dev Problem 46 - implement `_.once()`](https://bigfrontend.dev/problem/implement-once)

## Description

Implement `once(func)`.

[`_.once(func)`](https://lodash.com/docs/4.17.15#once) ensures the wrapped function runs at most once: the first call executes `func` and its return value is remembered; later calls ignore new arguments and return that same value.

## Difficulty

medium

## Tags

JavaScript, Lodash

## Example

```js
function func(num) {
  return num;
}

const onced = once(func);

onced(1); // 1 — func runs with 1
onced(2); // 1 — func is not called again; first result is returned
```

## Approach

- Keep a closure flag (e.g. `isInvoked`) and a slot for the first result.
- On the first invocation, set the flag, call the original with `func.call(this, ...args)` so `this` matches the wrapper, and store the return value.
- On later invocations, return the stored value without calling `func` again.

## Links

- [Problem](https://bigfrontend.dev/problem/implement-once)
- [Solution](https://bigfrontend.dev/solution/implement-once)
