import { describe, it, expect } from 'vitest';
import { all } from './solution.js';

describe('Problem 32 - implement Promise.all()', () => {
  it('should resolve with empty array for empty input', async () => {
    const result = await all([]);
    expect(result).toEqual([]);
  });

  it('should resolve with results in order when all succeed', async () => {
    const result = await all([
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should reject immediately when any promise rejects', async () => {
    const err = new Error('fail');
    await expect(
      all([
        Promise.resolve(1),
        Promise.reject(err),
        Promise.resolve(3),
      ])
    ).rejects.toBe(err);
  });

  it('should handle non-Promise values (wrap with Promise.resolve)', async () => {
    const result = await all([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle mixed Promises and non-Promises', async () => {
    const result = await all([
      Promise.resolve('a'),
      'b',
      Promise.resolve('c'),
    ]);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('should preserve order regardless of resolution order', async () => {
    const result = await all([
      new Promise((r) => setTimeout(() => r(3), 30)),
      new Promise((r) => setTimeout(() => r(1), 10)),
      new Promise((r) => setTimeout(() => r(2), 20)),
    ]);
    expect(result).toEqual([3, 1, 2]);
  });

  it('should reject with first rejection', async () => {
    const err1 = new Error('first');
    const err2 = new Error('second');
    await expect(
      all([
        new Promise((_, r) => setTimeout(() => r(err1), 20)),
        Promise.reject(err2),
        Promise.resolve(1),
      ])
    ).rejects.toBe(err2);
  });

  it('should handle single promise', async () => {
    const result = await all([Promise.resolve(42)]);
    expect(result).toEqual([42]);
  });

  it('should handle single non-Promise value', async () => {
    const result = await all([{ foo: 'bar' }]);
    expect(result).toEqual([{ foo: 'bar' }]);
  });
});
