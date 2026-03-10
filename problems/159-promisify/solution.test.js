import { describe, it, expect } from 'vitest';
import { promisify } from './solution.js';

describe('Problem 159 - implement promisify()', () => {
  it('should resolve with data when callback succeeds', async () => {
    const func = (callback) => callback(null, 42);
    const promisedFunc = promisify(func);
    const result = await promisedFunc();
    expect(result).toBe(42);
  });

  it('should reject with error when callback fails', async () => {
    const err = new Error('fail');
    const func = (callback) => callback(err);
    const promisedFunc = promisify(func);
    await expect(promisedFunc()).rejects.toBe(err);
  });

  it('should pass arguments to the original function', async () => {
    const func = (a, b, callback) => callback(null, a + b);
    const promisedFunc = promisify(func);
    const result = await promisedFunc(2, 3);
    expect(result).toBe(5);
  });

  it('should work with async callback invocation', async () => {
    const func = (callback) => setTimeout(() => callback(null, 'done'), 10);
    const promisedFunc = promisify(func);
    const result = await promisedFunc();
    expect(result).toBe('done');
  });

  it('should reject when callback called with error after delay', async () => {
    const err = new Error('delayed');
    const func = (callback) => setTimeout(() => callback(err), 10);
    const promisedFunc = promisify(func);
    await expect(promisedFunc()).rejects.toBe(err);
  });

  it('should preserve this context', async () => {
    const obj = {
      value: 10,
      add: function (x, callback) {
        callback(null, this.value + x);
      },
    };
    obj.promisedAdd = promisify(obj.add);
    const result = await obj.promisedAdd(5);
    expect(result).toBe(15);
  });

  it('should pass multiple args as data', async () => {
    const func = (callback) => callback(null, 1, 2, 3);
    const promisedFunc = promisify(func);
    const result = await promisedFunc();
    expect(result).toBe(1);
  });
});
