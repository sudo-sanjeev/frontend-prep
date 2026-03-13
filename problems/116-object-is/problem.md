# [BFE.dev Problem 116 - implement Object.is()](https://bigfrontend.dev/problem/implement-Object.is)

## Description

[Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) is similar to `===` except for two cases:

```
Object.is(0, -0)   // false
0 === -0           // true

Object.is(NaN, NaN) // true
NaN === NaN        // false
```

Implement your own `is(a, b)` that matches [Object.is](https://www.ecma-international.org/ecma-262/6.0/#sec-samevalue) behavior.

## Difficulty

easy

## Tags

JavaScript, Object.is, SameValue

## Approach

- **NaN**: `NaN !== NaN` is true; check both with `a !== a` (only NaN is not equal to itself)
- **+0 vs -0**: `0 === -0` is true; use `1/a === 1/b` — `1/0` is `Infinity`, `1/-0` is `-Infinity`
- **Everything else**: use `===`

## Links

- [Problem](https://bigfrontend.dev/problem/implement-Object.is)
- [Solution](https://bigfrontend.dev/solution/implement-Object.is)
