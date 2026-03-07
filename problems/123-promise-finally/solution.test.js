import { describe, it, expect } from 'vitest';
import { myFinally } from './solution.js';

describe('Problem 123 - implement Promise.prototype.finally()', () => {
  it('should run callback and preserve value when promise resolves', async () => {
    const logs = [];
    const result = await myFinally(
      Promise.resolve(42),
      () => { logs.push('finally'); }
    );
    expect(result).toBe(42);
    expect(logs).toEqual(['finally']);
  });

  it('should run callback and preserve rejection when promise rejects', async () => {
    const logs = [];
    const err = new Error('fail');
    await expect(
      myFinally(Promise.reject(err), () => { logs.push('finally'); })
    ).rejects.toBe(err);
    expect(logs).toEqual(['finally']);
  });

  it('should run callback before returning resolved value', async () => {
    const order = [];
    const result = await myFinally(
      Promise.resolve(1),
      async () => {
        order.push('finally start');
        await Promise.resolve();
        order.push('finally end');
      }
    );
    expect(order).toEqual(['finally start', 'finally end']);
    expect(result).toBe(1);
  });

  it('should run callback before propagating rejection', async () => {
    const order = [];
    const err = new Error('reject');
    await expect(
      myFinally(Promise.reject(err), async () => {
        order.push('finally');
        await Promise.resolve();
      })
    ).rejects.toBe(err);
    expect(order).toEqual(['finally']);
  });

  it('should propagate rejection if onFinally throws', async () => {
    const err = new Error('finally error');
    await expect(
      myFinally(Promise.resolve(1), () => { throw err; })
    ).rejects.toBe(err);
  });

  it('should propagate rejection if onFinally returns rejected promise', async () => {
    const err = new Error('finally reject');
    await expect(
      myFinally(Promise.resolve(1), () => Promise.reject(err))
    ).rejects.toBe(err);
  });

  it('should handle onFinally returning a value (ignored)', async () => {
    const result = await myFinally(
      Promise.resolve(10),
      () => 'ignored'
    );
    expect(result).toBe(10);
  });
});
