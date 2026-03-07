import { describe, it, expect } from 'vitest';
import { race } from './solution.js';

describe('Problem 35 - implement Promise.race()', () => {
  it('should resolve with first value when first promise resolves', async () => {
    const result = await race([
      new Promise((r) => setTimeout(() => r(1), 30)),
      new Promise((r) => setTimeout(() => r(2), 10)),
      new Promise((r) => setTimeout(() => r(3), 20)),
    ]);
    expect(result).toBe(2);
  });

  it('should reject with first rejection when first promise rejects', async () => {
    const err = new Error('first fail');
    await expect(
      race([
        new Promise((_, r) => setTimeout(() => r(new Error('slow')), 30)),
        new Promise((_, r) => setTimeout(() => r(err), 10)),
        new Promise((r) => setTimeout(() => r(3), 50)),
      ])
    ).rejects.toBe(err);
  });

  it('should resolve when first is a non-Promise value', async () => {
    const result = await race([42, Promise.resolve(1), Promise.resolve(2)]);
    expect(result).toBe(42);
  });

  it('should handle single promise', async () => {
    const result = await race([Promise.resolve(99)]);
    expect(result).toBe(99);
  });

  it('should handle single non-Promise value', async () => {
    const result = await race([{ foo: 'bar' }]);
    expect(result).toEqual({ foo: 'bar' });
  });

  it('should reject when first to settle is rejection', async () => {
    const err = new Error('reject');
    await expect(
      race([
        Promise.reject(err),
        new Promise((r) => setTimeout(() => r(1), 10)),
      ])
    ).rejects.toBe(err);
  });

  it('should resolve with first resolve even when later one rejects', async () => {
    const result = await race([
      Promise.resolve('first'),
      new Promise((_, r) => setTimeout(() => r(new Error('late')), 10)),
    ]);
    expect(result).toBe('first');
  });

  it('should handle empty array', async () => {
    const result = await race([]);
    expect(result).toBeNull();
  });
});
