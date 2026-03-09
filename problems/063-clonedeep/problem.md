# [BFE.dev Problem 63 - create _.cloneDeep()](https://bigfrontend.dev/problem/create-cloneDeep)

## Description

`Object.assign()` does shallow copy. For recursive deep copy, [_.cloneDeep](https://lodash.com/docs/4.17.15#cloneDeep) is useful.

Create your own `_.cloneDeep()`.

For simplicity, cover:

1. **Array**
2. **Plain objects** (object literals) with all enumerable properties
3. **Primitive types** and their wrapper objects (Number, String, Boolean)

**Note:** Don't use `structuredClone()`.

## Difficulty

medium

## Tags

JavaScript, Algorithm, Lodash

## Approach

- Return primitives and `null` as-is (`typeof obj !== 'object'`)
- Use a `Map` to detect and handle **circular references**
- Recursively clone: arrays → `[]`, plain objects → `{}`
- Preserve both string keys and `Symbol` keys (`Object.keys` + `Object.getOwnPropertySymbols`)

## Links

- [Problem](https://bigfrontend.dev/problem/create-cloneDeep)
- [Solution](https://bigfrontend.dev/solution/create-cloneDeep)
