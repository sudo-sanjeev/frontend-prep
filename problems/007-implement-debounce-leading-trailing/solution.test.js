import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce } from './solution.js';

describe('Problem 7 - implement debounce() with leading & trailing option', () => {
  beforeEach(() => {
    vi.useFakeTimers({ now: 0 });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  function run(input, wait = 3, option = { leading: false, trailing: true }) {
    vi.setSystemTime(0);
    const calls = [];
    const fn = (arg) => {
      calls.push(`${arg}@${Date.now()}`);
    };

    const debounced = debounce(fn, wait, option);
    input.forEach((entry) => {
      const [arg, time] = entry.split('@');
      setTimeout(() => debounced(arg), Number(time));
    });

    const maxTime = Math.max(...input.map((c) => Number(c.split('@')[1])));
    vi.advanceTimersByTime(maxTime + wait * 3 + 10);
    return calls;
  }

  it('leading:false trailing:true behaves like basic debounce', () => {
    const input = ['A@0', 'B@2', 'C@3', 'D@8'];
    expect(run(input, 3, { leading: false, trailing: true })).toEqual([
      'C@6',
      'D@11',
    ]);
  });

  it('leading:true trailing:true runs immediate and trailing latest', () => {
    const input = ['A@0', 'B@2', 'C@3', 'D@8'];
    expect(run(input, 3, { leading: true, trailing: true })).toEqual([
      'A@0',
      'C@6',
      'D@8',
    ]);
  });

  it('leading:true trailing:false only runs leading edge', () => {
    const input = ['A@0', 'B@2', 'C@3', 'D@8'];
    expect(run(input, 3, { leading: true, trailing: false })).toEqual([
      'A@0',
      'D@8',
    ]);
  });

  it('leading:false trailing:false does not run', () => {
    const input = ['A@0', 'B@2', 'C@3', 'D@8'];
    expect(run(input, 3, { leading: false, trailing: false })).toEqual([]);
  });

  it('single call with leading:true trailing:true runs once immediately', () => {
    expect(run(['A@0'], 3, { leading: true, trailing: true })).toEqual(['A@0']);
  });

  it('passes latest args to trailing call', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 50, { leading: false, trailing: true });

    debounced('A');
    debounced('B');
    debounced('C');

    vi.advanceTimersByTime(50);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('C');
  });

  it('preserves this context on invocation', () => {
    const obj = {
      base: 10,
      calls: [],
      add(n) {
        this.calls.push(this.base + n);
      },
    };

    obj.debounced = debounce(obj.add, 50, { leading: false, trailing: true });
    obj.debounced(1);
    obj.debounced(2);
    vi.advanceTimersByTime(50);

    expect(obj.calls).toEqual([12]);
  });
});
