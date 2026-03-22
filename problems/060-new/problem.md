# [BFE.dev Problem 60 - create your own new operator](https://bigfrontend.dev/problem/create-your-own-new-operator)

## Description

The [new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) creates a new instance of a constructor function.

Implement `myNew(constructor, ...args)` that returns the same result as `new constructor(...args)` **without using `new`**.

**Pay attention to the constructor's return value:**
- If constructor returns an **object** (including function), return that
- Otherwise return the newly created object

## Difficulty

easy

## Tags

JavaScript, new, Prototype

## Approach

1. Create a new object
2. Set its `[[Prototype]]` to `constructor.prototype` (via `Object.setPrototypeOf` or `Object.create`)
3. Call constructor with `obj` as `this` and `...args`
4. If result is an object/function, return it; else return `obj`

## Links

- [Problem](https://bigfrontend.dev/problem/create-your-own-new-operator)
- [Solution](https://bigfrontend.dev/solution/create-your-own-new-operator)
