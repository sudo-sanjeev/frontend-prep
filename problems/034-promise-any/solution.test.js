import { describe, it, expect } from 'vitest';
import { any } from './solution.js';

describe('Problem 34 - implement Promise.any()', () => {
  it('should resolve with first fulfilled value', async () => {
    const result = await any([
      new Promise((_, r) => setTimeout(() => r(new Error('slow')), 30)),
      new Promise((r) => setTimeout(() => r(2), 10)),
      new Promise((r) => setTimeout(() => r(3), 20)),
    ]);
    expect(result).toBe(2);
  });

  it('should resolve when first is a non-Promise value', async () => {
    const result = await any([
      Promise.reject(new Error('a')),
      Promise.reject(new Error('b')),
      42,
    ]);
    expect(result).toBe(42);
  });

  it('should handle single promise', async () => {
    const result = await any([Promise.resolve(99)]);
    expect(result).toBe(99);
  });

  it('should handle single non-Promise value', async () => {
    const result = await any([{ foo: 'bar' }]);
    expect(result).toEqual({ foo: 'bar' });
  });

  it('should reject with AggregateError when all reject', async () => {
    const err1 = new Error('first');
    const err2 = new Error('second');
    const err = await any([
      Promise.reject(err1),
      Promise.reject(err2),
    ]).catch((e) => e);
    expect(err).toBeInstanceOf(AggregateError);
  });

  it('should reject with AggregateError for empty array', async () => {
    const err = await any([]).catch((e) => e);
    expect(err).toBeInstanceOf(AggregateError);
  });

  it('should resolve with first resolve even when others reject', async () => {
    const result = await any([
      Promise.reject(new Error('a')),
      Promise.resolve('first'),
      Promise.reject(new Error('b')),
    ]);
    expect(result).toBe('first');
  });

  it('should resolve when first to settle is fulfillment (delayed)', async () => {
    const result = await any([
      new Promise((_, r) => setTimeout(() => r(new Error('late')), 20)),
      new Promise((r) => setTimeout(() => r('early'), 5)),
    ]);
    expect(result).toBe('early');
  });
});
