import { describe, it, expect, vi } from 'vitest';
import { EventEmitter } from './solution.js';

describe('Problem 16 - create an Event Emitter', () => {
  it('should subscribe and emit', () => {
    const emitter = new EventEmitter();
    const fn = vi.fn();
    emitter.subscribe('click', fn);
    emitter.emit('click', 1, 2);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(1, 2);
  });

  it('BFE: same callback subscribed multiple times is called multiple times', () => {
    const emitter = new EventEmitter();
    const callback1 = vi.fn();
    const sub1 = emitter.subscribe('event1', callback1);
    const sub3 = emitter.subscribe('event1', callback1);

    emitter.emit('event1', 1, 2);

    expect(callback1).toHaveBeenCalledTimes(2);
    expect(callback1).toHaveBeenNthCalledWith(1, 1, 2);
    expect(callback1).toHaveBeenNthCalledWith(2, 1, 2);
  });

  it('BFE: release() unsubscribes only that subscription', () => {
    const emitter = new EventEmitter();
    const callback1 = vi.fn();
    const sub1 = emitter.subscribe('event1', callback1);
    const sub3 = emitter.subscribe('event1', callback1);

    sub1.release();
    emitter.emit('event1', 1, 2);
    expect(callback1).toHaveBeenCalledTimes(1);

    sub3.release();
    emitter.emit('event1', 1, 2);
    expect(callback1).toHaveBeenCalledTimes(1);
  });

  it('should support multiple events', () => {
    const emitter = new EventEmitter();
    const fn1 = vi.fn();
    const fn2 = vi.fn();
    emitter.subscribe('a', fn1);
    emitter.subscribe('b', fn2);

    emitter.emit('a', 1);
    emitter.emit('b', 2);

    expect(fn1).toHaveBeenCalledWith(1);
    expect(fn2).toHaveBeenCalledWith(2);
  });

  it('should emit with no subscribers (no error)', () => {
    const emitter = new EventEmitter();
    expect(() => emitter.emit('unknown')).not.toThrow();
  });

  it('should pass emitter as this context to callbacks', () => {
    const emitter = new EventEmitter();
    let capturedThis;
    emitter.subscribe('e', function () {
      capturedThis = this;
    });
    emitter.emit('e');
    expect(capturedThis).toBe(emitter);
  });
});
