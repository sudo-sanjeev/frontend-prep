# [BFE.dev Problem 6 - implement basic debounce()](https://bigfrontend.dev/problem/implement-basic-debounce)

## Description
Debounce is a common technique in web apps (e.g. [lodash debounce](https://lodash.com/docs/4.17.15#debounce)). Implement your own basic `debounce()`.

`debounce(func, delay)` returns a debounced function that delays invocation until `delay` ms have passed without new calls. Each new call resets the timer.

## Difficulty
easy

## Tags
JavaScript, Lodash

## Example

```
Before debouncing:  ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G
After debouncing (wait=3): ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G
```

Only D and G run; A, B, C, E, F are cancelled by subsequent calls within the wait window.

## Approach

- Store `timeoutId` in closure.
- On each call: `clearTimeout(timeoutId)`, then `setTimeout` to call `func` after `wait` ms with latest args.
- Use `func.apply(this, args)` if you need to preserve `this` context.
