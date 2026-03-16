# [BFE.dev Problem 7 - implement debounce() with leading & trailing option](https://bigfrontend.dev/problem/implement-debounce-with-leading-and-trailing-option)

## Description
Implement `debounce(func, wait, option)`.

- `option.leading`: invoke on the leading edge of the debounce window.
- `option.trailing`: invoke on the trailing edge with the latest arguments.

Compared to basic debounce, this version supports combinations of leading/trailing behavior.

## Difficulty
medium

## Tags
JavaScript, Lodash

## Example (`wait = 3`)

Input calls:

`A@0, B@2, C@3, D@8`

- `{ leading: false, trailing: true }` -> `C@6, D@11`
- `{ leading: true, trailing: true }` -> `A@0, C@6, D@8`
- `{ leading: true, trailing: false }` -> `A@0, D@8`

## Approach

- Keep a timeout id in closure and clear/restart it on each call.
- Track whether current invocation already happened on the leading edge.
- If trailing is enabled, run trailing call when timer expires using latest args/context.

## Links
- [Problem](https://bigfrontend.dev/problem/implement-debounce-with-leading-and-trailing-option)
