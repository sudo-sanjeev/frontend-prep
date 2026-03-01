# [BFE.dev Problem 2 - implement curry() with placeholder support](https://bigfrontend.dev/problem/implement-curry-with-placeholder)

## Description
Follow-up on [Problem 1 - implement curry()](https://bigfrontend.dev/problem/implement-curry). Implement `curry()` with **placeholder** support so arguments can be applied out of order.

## Difficulty
medium

## Tags
Lodash, JavaScript

## Example

```javascript
const join = (a, b, c) => `${a}_${b}_${c}`;
const curriedJoin = curry(join);
const _ = curry.placeholder;

curriedJoin(1, 2, 3);           // '1_2_3'
curriedJoin(_, 2)(1, 3);        // '1_2_3'  — placeholder filled by 1
curriedJoin(_, _, _)(1)(_, 3)(2);  // '1_2_3' — placeholders filled across calls
```

## Approach

- **Placeholder:** `curry.placeholder` is a unique value (e.g. `Symbol()`) used to mark argument slots to be filled later.
- **Merge:** When new args arrive, merge with previous: for each placeholder in previous args, consume the next new arg; remaining new args append.
- **Recursion:** Store merged args and recurse until no placeholders remain and `args.length >= fn.length`, then call `fn`.
- **`this`:** Use `fn.apply(this, allArgs)` so the curried function preserves context.

## References

- [curriable](https://github.com/planttheidea/curriable)
- [lodash curry](https://lodash.com/docs/4.17.15#curry)
- [javascript.info – currying](https://javascript.info/currying-partials)
