import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { throttle } from './solution.js';

describe('Problem 5 - implement throttle() with leading & trailing option', () => {
  beforeEach(() => {
    vi.useFakeTimers({ now: 0 });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  function run(input, wait = 3, option = { leading: true, trailing: true }) {
    vi.setSystemTime(0);
    const calls = [];
    const fn = (arg) => {
      calls.push(`${arg}@${Date.now()}`);
    };

    const throttled = throttle(fn, wait, option);
    input.forEach((entry) => {
      const [arg, time] = entry.split('@');
      setTimeout(() => throttled(arg), Number(time));
    });

    const maxTime = Math.max(...input.map((c) => Number(c.split('@')[1])));
    vi.advanceTimersByTime(maxTime + wait * 3 + 10);
    return calls;
  }

  it('leading:true trailing:true should run immediate + trailing latest', () => {
    const input = ['A@0', 'B@2', 'C@3', 'D@9'];
    expect(run(input, 3, { leading: true, trailing: true })).toEqual([
      'A@0',
      'C@3',
      'D@9',
    ]);
  });

  it('leading:false trailing:true should delay first execution', () => {
    const input = ['A@0', 'B@2', 'C@3', 'D@9'];
    expect(run(input, 3, { leading: false, trailing: true })).toEqual([
      'C@3',
      'D@12',
    ]);
  });

  it('leading:true trailing:false should only run leading calls', () => {
    const input = ['A@0', 'B@2', 'C@3', 'D@9'];
    expect(run(input, 3, { leading: true, trailing: false })).toEqual([
      'A@0',
      'D@9',
    ]);
  });

  it('leading:false trailing:false should never run', () => {
    const input = ['A@0', 'B@2', 'C@3', 'D@9'];
    expect(run(input, 3, { leading: false, trailing: false })).toEqual([]);
  });

  it('uses latest args for trailing call', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100, { leading: true, trailing: true });

    throttled('A');
    throttled('B');
    throttled('C');
    vi.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, 'A');
    expect(fn).toHaveBeenNthCalledWith(2, 'C');
  });
});
