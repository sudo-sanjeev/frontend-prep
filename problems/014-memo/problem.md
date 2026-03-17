# [BFE.dev Problem 14 - Implement a general memoization function](https://bigfrontend.dev/problem/implement-general-memoization-function)

## Description
Implement `memo(func, resolver?)`.

- It returns a memoized function.
- Repeated calls with the same cache key should return cached results.
- `resolver` (optional) generates the cache key from arguments.
- If `resolver` is not provided, use a default key strategy.

## Difficulty
medium

## Tags
JavaScript

## Example

```js
let count = 0;
const add = (a, b) => {
	count += 1;
	return a + b;
};

const memoizedAdd = memo(add);
memoizedAdd(1, 2); // 3, count = 1
memoizedAdd(1, 2); // 3, count = 1 (cached)
```

## Approach

- Create a `Map` cache inside closure.
- Build cache key by `resolver(...args)` or default strategy.
- If key exists, return cached value.
- Otherwise execute original function, store result, and return it.

## Links
- [Problem](https://bigfrontend.dev/problem/implement-general-memoization-function)
