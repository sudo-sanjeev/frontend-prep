# [BFE.dev Problem 16 - create an Event Emitter](https://bigfrontend.dev/problem/create-an-Event-Emitter)

## Description
Create an Event Emitter class similar to [Node.js EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) or [Facebook's emitter](https://github.com/facebookarchive/emitter).

## Difficulty
medium

## Tags
JavaScript, Event Emitter, System Design

## API

```javascript
const emitter = new EventEmitter();
```

### subscribe(eventName, callback)
Subscribe to an event. Returns a subscription object with a `release()` method.

- The **same callback** can subscribe to the **same event** multiple times (each call creates a separate subscription).
- `release()` removes only that specific subscription.

### emit(eventName, ...args)
Trigger all callbacks for the event, passing `args` to each.

## Example

```javascript
const emitter = new EventEmitter();

const callback1 = (a, b) => console.log(a, b);

const sub1 = emitter.subscribe('event1', callback1);
const sub2 = emitter.subscribe('event2', callback2);
const sub3 = emitter.subscribe('event1', callback1);  // same callback, same event

emitter.emit('event1', 1, 2);  // callback1 called twice (sub1 + sub3)

sub1.release();
sub3.release();
emitter.emit('event1', 1, 2);  // callback1 not called anymore
```

## Approach

- Store subscriptions per event (e.g. `Map<eventName, Set<{callback}>>`).
- Wrap each callback in an object so the same function can appear multiple times; `release()` removes only that object.
- `emit` iterates and calls each callback with `apply(this, args)` to preserve context.
