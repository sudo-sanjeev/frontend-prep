import { describe, it, expect, vi } from 'vitest';
import { memo } from './solution.js';

describe('Problem 14 - implement memo()', () => {
  it('caches result for same arguments with default resolver', () => {
    const fn = vi.fn((a, b) => a + b);
    const memoized = memo(fn);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('computes again for different arguments', () => {
    const fn = vi.fn((a, b) => a + b);
    const memoized = memo(fn);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(2, 3)).toBe(5);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('uses custom resolver as cache key', () => {
    const fn = vi.fn((obj) => obj.value * 2);
    const memoized = memo(fn, (obj) => obj.id);

    expect(memoized({ id: 'x', value: 10 })).toBe(20);
    expect(memoized({ id: 'x', value: 99 })).toBe(20);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('does not share cache across different memo instances', () => {
    const fn = vi.fn((a) => a * 2);
    const memo1 = memo(fn);
    const memo2 = memo(fn);

    expect(memo1(2)).toBe(4);
    expect(memo2(2)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('preserves this context for function execution', () => {
    const obj = {
      base: 10,
      add(n) {
        return this.base + n;
      },
    };

    obj.memoAdd = memo(obj.add);

    expect(obj.memoAdd(5)).toBe(15);
    expect(obj.memoAdd(5)).toBe(15);
  });

  it('caches undefined result as well', () => {
    const fn = vi.fn(() => undefined);
    const memoized = memo(fn);

    expect(memoized('a')).toBeUndefined();
    expect(memoized('a')).toBeUndefined();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
