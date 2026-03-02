import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce } from './solution.js';

describe('Problem 6 - implement basic debounce()', () => {
  beforeEach(() => {
    vi.useFakeTimers({ now: 0 });
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  /**
   * BFE-style runner: schedules calls at given times, returns "arg@time" when func runs.
   */
  function run(input, wait = 3) {
    vi.setSystemTime(0);
    const calls = [];
    const func = (arg) => {
      calls.push(`${arg}@${Date.now()}`);
    };
    const debounced = debounce(func, wait);
    input.forEach((call) => {
      const [arg, time] = call.split('@');
      setTimeout(() => debounced(arg), Number(time));
    });
    const maxTime = Math.max(...input.map((c) => Number(c.split('@')[1])));
    vi.advanceTimersByTime(maxTime + wait + 10);
    return calls;
  }

  it('BFE example: A@0, B@2, C@3 with wait=3 → only C@6', () => {
    expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['C@6']);
  });

  it('should call with last args after wait period', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced(1);
    debounced(2);
    debounced(3);

    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(3);
  });

  it('should debounce rapid calls', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 50);

    debounced(1);
    vi.advanceTimersByTime(10);
    debounced(2);
    vi.advanceTimersByTime(10);
    debounced(3);
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(50);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(3);
  });

  it('should invoke again after quiet period', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 50);

    debounced(1);
    vi.advanceTimersByTime(50);
    expect(fn).toHaveBeenCalledWith(1);

    debounced(2);
    vi.advanceTimersByTime(50);
    expect(fn).toHaveBeenCalledWith(2);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should pass multiple args', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 50);
    debounced(1, 2, 3);
    vi.advanceTimersByTime(50);
    expect(fn).toHaveBeenCalledWith(1, 2, 3);
  });
});
