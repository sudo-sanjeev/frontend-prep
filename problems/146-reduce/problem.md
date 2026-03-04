# [BFE.dev Problem 146 - implement Array.prototype.reduce()](https://bigfrontend.dev/problem/implement-Array-prototype-reduce)

## Description

[Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) is a handy method to process arrays.

Could you implement it by yourself?

```js
[1, 2, 3].myReduce((sum, item) => sum + item) // 6
```

Notes:
1. Your function is only tested against valid arrays (no array-like objects)
2. Do not use native Array.prototype.reduce() in your code

## Difficulty

medium

## Tags

JavaScript, Array, Lodash

## Approach

- **Without initial value**: accumulator starts at `this[0]`, iterate from index 1
- **With initial value**: accumulator starts at `initialValue`, iterate from index 0
- **Edge case**: Empty array with no initial value throws Error
- Callback receives `(accumulator, currentValue, currentIndex, array)`

## Links

- [Problem](https://bigfrontend.dev/problem/implement-Array-prototype-reduce)
- [Solution](https://bigfrontend.dev/solution/implement-Array-prototype-reduce)
