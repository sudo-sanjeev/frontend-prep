# [BFE.dev Problem 94 - implement your own Object.create](https://bigfrontend.dev/problem/implement-your-own-Object-create)

## Description

[Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) creates a new object with the specified prototype object.

Implement your own `myObjectCreate(proto)` to do the same (basic usage).

**Notes:**

1. Do not use `Object.create()` or `Object.setPrototypeOf()`
2. Throw an Error if a non-object is passed in (e.g. `undefined`, primitives). Note: `null` is valid and creates an object with no prototype
3. No need to support the second parameter (propertiesObject)

## Difficulty

easy

## Tags

JavaScript, Prototype, Object

## Approach

- Create an empty object and set its prototype without using `Object.create` or `setPrototypeOf`
- Options: use `__proto__` (deprecated but works), or a constructor with `.prototype` assignment
- Throw when `proto !== null` and `typeof proto` is not `'object'` or `'function'`

## Links

- [Problem](https://bigfrontend.dev/problem/implement-your-own-Object-create)
- [Solution](https://bigfrontend.dev/solution/implement-your-own-Object-create)
