# [BFE.dev Problem 28 - implement clearAllTimeout()](https://bigfrontend.dev/problem/implement-clearAllTimeout)

## Description

`window.setTimeout()` schedules a task to run after a delay. Implement `clearAllTimeout()` to cancel all scheduled timers — useful before page transitions.

**Example:**

```
setTimeout(func1, 10000)
setTimeout(func2, 10000)
setTimeout(func3, 10000)
// all 3 functions are scheduled 10 seconds later

clearAllTimeout()
// all scheduled tasks are cancelled
```

**Note:** Keep the interface of `window.setTimeout` and `window.clearTimeout` the same, but you may replace them with new logic that tracks timers.

## Difficulty

easy

## Tags

JavaScript, setTimeout, clearTimeout

## Approach

- Store the original `setTimeout` and `clearTimeout`
- Wrap `setTimeout` to track each timer ID in a Set before returning
- Wrap `clearTimeout` to remove the ID from the Set and call the original
- `clearAllTimeout` iterates the Set and clears each timer, then clears the Set

## Links

- [Problem](https://bigfrontend.dev/problem/implement-clearAllTimeout)
- [Solution](https://bigfrontend.dev/solution/implement-clearAllTimeout)
