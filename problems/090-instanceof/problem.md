# [BFE.dev Problem 90 - write your own instanceof](https://bigfrontend.dev/problem/write-your-own-instanceof)

## Description

The [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) operator checks if an object's prototype chain contains the constructor's prototype.

Implement your own `myInstanceOf(obj, target)` that returns the same result as `obj instanceof target`.

**Examples:**

```
class A {}
class B extends A {}
const b = new B()
myInstanceOf(b, B)  // true
myInstanceOf(b, A)  // true
myInstanceOf(b, Object)  // true

function C() {}
myInstanceOf(b, C)  // false

C.prototype = B.prototype
myInstanceOf(b, C)  // true

C.prototype = {}
myInstanceOf(b, C)  // false
```

## Difficulty

medium

## Tags

JavaScript, Prototype, instanceof

## Approach

- Walk the `obj` prototype chain (`obj.__proto__` or `Object.getPrototypeOf(obj)`)
- At each step, compare with `target.prototype`
- Return `true` if found, `false` if chain ends (null)
- Return `false` for `null` and primitives (they have no prototype chain)

## Links

- [Problem](https://bigfrontend.dev/problem/write-your-own-instanceof)
- [Solution](https://bigfrontend.dev/solution/write-your-own-instanceof)
