# [BFE.dev Problem 36 - create a fake timer (setTimeout)](https://bigfrontend.dev/problem/create-a-fake-timer)

## Description

`setTimeout` schedules work on a task queue; in the real browser the delay is not exact ([event loop](https://javascript.info/event-loop)). That is usually fine for apps but awkward in tests.

Implement a **fake timer** so `setTimeout` / `clearTimeout` behave **synchronously** with **deterministic** “time”: assume callbacks take zero time, start at time `0`, and `setTimeout(fn, 100)` means `fn` runs when the clock is exactly `100`.

You must also replace **`Date.now()`** so it reports the fake current time (only `Date.now()` matters for judging).

Implement a `FakeTimer` class with:

- **`install()`** — replace global `setTimeout`, `clearTimeout`, and `Date.now()`.
- **`uninstall()`** — restore the original APIs.
- **`tick()`** — run all scheduled callbacks **in order of their fire time** (earliest first).

This pattern matches libraries like [Sinon fake timers](https://github.com/sinonjs/fake-timers).

## Difficulty

medium

## Tags

JavaScript, testing

## Example

```js
const fakeTimer = new FakeTimer();
fakeTimer.install();

const logs = [];
const log = (arg) => {
  logs.push([Date.now(), arg]);
};

setTimeout(() => log('A'), 100); // fires at 100

const b = setTimeout(() => log('B'), 110);
clearTimeout(b); // cancelled

setTimeout(() => log('C'), 200); // fires at 200

fakeTimer.tick();

expect(logs).toEqual([
  [100, 'A'],
  [200, 'C'],
]);

fakeTimer.uninstall();
```

## Approach

- **Constructor:** stash originals (`window.setTimeout`, `window.clearTimeout`, `Date.now`), initialize virtual time (e.g. `0`), a monotonic id counter, and a **priority queue** of pending tasks `{ id, cb, fireTime, args }`.
- **`install()`:** `setTimeout(cb, delay, ...args)` assigns an id, enqueues `{ fireTime: currentTime + delay, ... }`. `clearTimeout(id)` removes that id from the queue. `Date.now()` returns the fake `currentTime`.
- **`tick()`:** repeatedly take the **earliest** pending task, set `currentTime` to its `fireTime`, then invoke `cb(...args)` until the queue is empty (so order matches scheduled times).
- **`uninstall()`:** restore the three globals from the saved originals.

## Links

- [Problem](https://bigfrontend.dev/problem/create-a-fake-timer)
- [Solution](https://bigfrontend.dev/problem/create-a-fake-timer/solution)
