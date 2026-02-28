# [BFE.dev Problem 1 - implement curry()](https://bigfrontend.dev/problem/implement-curry)

## Description
Please implement a `curry()` function, which accepts a function and return a curried one.

## Difficulty
easy

## Tags
JavaScript

## Example
```js
const join = (a, b, c) => {
   return `${a}_${b}_${c}`;
}
const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'
```
