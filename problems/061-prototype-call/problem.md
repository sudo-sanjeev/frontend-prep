# [BFE.dev Problem 61 - create Function.prototype.call](https://bigfrontend.dev/problem/create-call-method)

## Description

[Function.prototype.call](https://tc39.es/ecma262/#sec-function.prototype.call) invokes a function with a given `this` value and arguments.

Implement your own `myCall` that returns the same result as `Function.prototype.call`.

**Spec notes:**
- When `thisArg` is `undefined` or `null`, use the global object (non-strict mode behavior)
- Do not use `Function.prototype.call`, `apply`, `bind`, or `Reflect.apply`

## Difficulty

medium

## Tags

JavaScript, Function, this

## Approach

- When `thisArg` is null/undefined → use global object (`globalThis`)
- Use `Object(thisArg)` to convert primitives to objects
- Attach the function to context via a unique key (Symbol), call it, then delete
- Return the result

## Links

- [Problem](https://bigfrontend.dev/problem/create-call-method)
- [Solution](https://bigfrontend.dev/solution/create-call-method)
