# [BFE.dev Problem 11 - what is Composition? create a pipe()](https://bigfrontend.dev/problem/what-is-composition-create-a-pipe)

## Description

[Composition](https://whatthefuck.is/composition) is combining smaller pieces into a larger whole. Create a `pipe()` function that chains multiple functions together.

Suppose we have:
```js
const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;
```

Then:
```js
pipe([times(2), times(3)])(5)           // 5 * 2 * 3 = 30
pipe([times(2), plus(3), times(4)])(5)   // ((5 * 2) + 3) * 4 = 52
pipe([times(2), subtract(3), divide(4)])(5)  // ((5 * 2) - 3) / 4 = 1.75
```

**Note:** Functions passed to `pipe()` all accept 1 argument.

## Difficulty

easy

## Tags

JavaScript, Composition, Functional

## Approach

- Return a function that accepts the initial value (`args[0]`)
- Reduce through funcs: pass result of each func as input to the next
- Empty funcs array → return first argument as-is

## Links

- [Problem](https://bigfrontend.dev/problem/what-is-composition-create-a-pipe)
- [Solution](https://bigfrontend.dev/solution/what-is-composition-create-a-pipe)
