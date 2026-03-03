# [BFE.dev Problem 151 - implement Array.prototype.map()](https://bigfrontend.dev/problem/implement-Array-prototype-map)

## Description

Please implement your own [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

```js
[1, 2, 3].myMap(num => num * 2)
// [2, 4, 6]
```

**Do not use** `Array.prototype.map()` directly in your implementation.

## Difficulty

medium

## Tags

JavaScript, Array

## Signature

```js
Array.prototype.myMap = function(callbackFn, thisArg) { ... }
```

The callback receives: `(element, index, array)`.

## Edge cases to consider

- Sparse arrays (holes) — callback should only run for existing indexes; result preserves length
- `thisArg` — optional second argument binds `this` inside the callback
- Empty arrays
- Callback that uses `index` or `array` parameters

## Links

- [Problem](https://bigfrontend.dev/problem/implement-Array-prototype-map)
- [MDN: Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
