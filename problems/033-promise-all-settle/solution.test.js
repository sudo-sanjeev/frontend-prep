import { describe, it, expect } from 'vitest';
import { allSettled } from './solution.js';

describe('Problem 33 - implement Promise.allSettled()', () => {
  it('should resolve with empty array for empty input', async () => {
    const result = await allSettled([]);
    expect(result).toEqual([]);
  });

  it('should resolve with all fulfilled when all succeed', async () => {
    const result = await allSettled([
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ]);
    expect(result).toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 2 },
      { status: 'fulfilled', value: 3 },
    ]);
  });

  it('should include rejected outcomes when some fail', async () => {
    const err = new Error('fail');
    const result = await allSettled([
      Promise.resolve(1),
      Promise.reject(err),
      Promise.resolve(3),
    ]);
    expect(result).toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: err },
      { status: 'fulfilled', value: 3 },
    ]);
  });

  it('should resolve with all rejected when all fail', async () => {
    const err1 = new Error('first');
    const err2 = new Error('second');
    const result = await allSettled([
      Promise.reject(err1),
      Promise.reject(err2),
    ]);
    expect(result).toEqual([
      { status: 'rejected', reason: err1 },
      { status: 'rejected', reason: err2 },
    ]);
  });

  it('should handle non-Promise values as fulfilled', async () => {
    const result = await allSettled([1, 'a', { foo: 'bar' }]);
    expect(result).toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'fulfilled', value: 'a' },
      { status: 'fulfilled', value: { foo: 'bar' } },
    ]);
  });

  it('should preserve order regardless of settlement order', async () => {
    const result = await allSettled([
      new Promise((r) => setTimeout(() => r(3), 30)),
      new Promise((r) => setTimeout(() => r(1), 10)),
      new Promise((_, r) => setTimeout(() => r(new Error('late')), 20)),
    ]);
    expect(result).toEqual([
      { status: 'fulfilled', value: 3 },
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: expect.any(Error) },
    ]);
    expect(result[2].reason.message).toBe('late');
  });

  it('should handle mixed Promises and non-Promises', async () => {
    const err = new Error('reject');
    const result = await allSettled([
      Promise.resolve('a'),
      'b',
      Promise.reject(err),
    ]);
    expect(result).toEqual([
      { status: 'fulfilled', value: 'a' },
      { status: 'fulfilled', value: 'b' },
      { status: 'rejected', reason: err },
    ]);
  });

  it('should handle single promise', async () => {
    const result = await allSettled([Promise.resolve(42)]);
    expect(result).toEqual([{ status: 'fulfilled', value: 42 }]);
  });

  it('should handle single rejected promise', async () => {
    const err = new Error('only');
    const result = await allSettled([Promise.reject(err)]);
    expect(result).toEqual([{ status: 'rejected', reason: err }]);
  });
});
