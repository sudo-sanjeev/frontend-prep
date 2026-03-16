# [BFE.dev Problem 5 throttle() with leading & trailing](https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option)

## Description
Implement `throttle(func, wait, option)`.

- `option.leading` decides if the function should run immediately on the first call in a window.
- `option.trailing` decides if the function should run with the latest arguments when the wait window ends.

Behavior should match the common throttle contract used in frontend interviews:

- max one execution per `wait` interval
- latest call wins for trailing invocation
- supports combinations of `{ leading: true/false, trailing: true/false }`

### Example (`wait = 3`)

Input calls:

`A@0, B@2, C@3, D@9`

- `{ leading: true, trailing: true }` -> `A@0, C@3, D@9`
- `{ leading: false, trailing: true }` -> `C@3, D@12`
- `{ leading: true, trailing: false }` -> `A@0, D@9`

## Difficulty
medium

## Tags
JavaScript, Lodash

## Approach
- Track whether we are in a cooldown window.
- Store latest args/context seen during cooldown.
- At cooldown boundary, execute trailing call if enabled and there are pending args.
- Restart cooldown after a trailing execution to keep throttle frequency bounded.

## Links
- [Problem](https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option)
