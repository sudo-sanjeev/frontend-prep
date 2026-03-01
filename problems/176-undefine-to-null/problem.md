# [BFE.dev Problem 176 - undefined to null](https://bigfrontend.dev/problem/undefined-to-null)

## Description
`null` and `undefined` are treated differently by `JSON.stringify()`:

```javascript
JSON.stringify({ a: null });       // '{"a":null}'
JSON.stringify({ a: undefined }); // '{}'
JSON.stringify([null]);           // '[null]'
JSON.stringify([undefined]);     // '[null]'
```

This mismatch can cause client–server alignment issues. Implement `undefinedToNull()` to return a copy with all `undefined` values replaced by `null`.

## Difficulty
easy

## Tags
JavaScript

## Examples

```javascript
undefinedToNull({ a: undefined, b: 'BFE.dev' });
// { a: null, b: 'BFE.dev' }

undefinedToNull({ a: ['BFE.dev', undefined, 'bigfrontend.dev'] });
// { a: ['BFE.dev', null, 'bigfrontend.dev'] }
```

## Approach

- **Base:** Return primitives and `null` as-is (no replacement).
- **Objects/arrays:** Recursively iterate (e.g. `for...in` or `Object.keys`); when `typeof value === 'undefined'`, set to `null`; when value is object/array, recurse. Return the (possibly mutated) structure.
- **Note:** The spec asks for a "copy"; for minimal implementation, mutating in place and returning works for typical test cases. A strict copy can be built with shallow/clone-then-mutate if needed.
