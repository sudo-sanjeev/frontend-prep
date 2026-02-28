import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { throttle } from './solution.js';

/**
 * BFE.dev throttle spec:
 * - throttle(func, delay) invokes func at max frequency (once per wait period)
 * - First call executes immediately
 * - Calls during "cooling" period: only the last one runs when cooldown ends
 * - Example: A@0, B@2, C@3 with wait=3 → A@0, C@3 (B swallowed, C runs after cooldown)
 */
describe('Problem 4 - implement basic throttle()', () => {
  beforeEach(() => {
    vi.useFakeTimers({ now: 0 });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  /**
   * Mirrors BFE.dev test runner: schedules calls at given times, returns
   * calls as "arg@time" (time = when func was actually invoked).
   */
  function run(input, wait = 3) {
    vi.setSystemTime(0);
    const calls = [];
    const func = (arg) => {
      calls.push(`${arg}@${Date.now()}`);
    };
    const throttled = throttle(func, wait);
    input.forEach((call) => {
      const [arg, time] = call.split('@');
      setTimeout(() => throttled(arg), Number(time));
    });
    // Advance past all scheduled calls + extra for cooldown
    const maxTime = Math.max(...input.map((c) => Number(c.split('@')[1])));
    vi.advanceTimersByTime(maxTime + wait + 10);
    return calls;
  }

  it('BFE example: A@0, B@2, C@3 with wait=3 → A@0, C@3', () => {
    expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['A@0', 'C@3']);
  });

  it('BFE full example: A-G with wait=3 → A, C, D, E, G', () => {
    // ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G
    // → ─ A ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ E ─ ─ ─ G
    const input = ['A@0', 'B@1', 'C@2', 'D@5', 'E@12', 'F@14', 'G@15'];
    const result = run(input);
    expect(result).toEqual(['A@0', 'C@3', 'D@5', 'E@12', 'G@15']);
  });

  it('first call executes immediately', () => {
    const calls = [];
    const func = (x) => calls.push(x);
    const throttled = throttle(func, 100);
    throttled('first');
    expect(calls).toEqual(['first']);
  });

  it('calls within wait period are throttled - only first runs immediately', () => {
    const calls = [];
    const func = (x) => calls.push(x);
    const throttled = throttle(func, 100);
    throttled('A');
    throttled('B');
    throttled('C');
    expect(calls).toEqual(['A']);
  });

  it('last call during cooldown runs when cooldown ends', () => {
    const calls = [];
    const func = (x) => calls.push(x);
    const throttled = throttle(func, 100);
    throttled('A');
    throttled('B');
    throttled('C');
    vi.advanceTimersByTime(100);
    expect(calls).toEqual(['A', 'C']);
  });

  it('call after cooldown runs immediately', () => {
    const calls = [];
    const func = (x) => calls.push(x);
    const throttled = throttle(func, 50);
    throttled('A');
    vi.advanceTimersByTime(50);
    throttled('B');
    expect(calls).toEqual(['A', 'B']);
  });

  it('passes multiple args to throttled function', () => {
    const calls = [];
    const func = (a, b) => calls.push([a, b]);
    const throttled = throttle(func, 50);
    throttled(1, 2);
    throttled(3, 4);
    vi.advanceTimersByTime(50);
    expect(calls).toEqual([[1, 2], [3, 4]]);
  });

  it('preserves `this` context', () => {
    const obj = { value: 42, calls: [] };
    obj.fn = function (x) {
      this.calls.push(x + this.value);
    };
    const throttled = throttle(obj.fn.bind(obj), 50);
    throttled(1);
    throttled(2);
    vi.advanceTimersByTime(50);
    expect(obj.calls).toEqual([43, 44]);
  });
});
