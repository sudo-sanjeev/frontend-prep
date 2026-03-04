import { describe, it, expect } from 'vitest';
import './solution.js';

describe('Problem 146 - implement Array.prototype.reduce()', () => {
  it('should sum array without initial value', () => {
    expect([1, 2, 3].myReduce((sum, item) => sum + item)).toBe(6);
  });

  it('should sum array with initial value', () => {
    expect([1, 2, 3].myReduce((sum, item) => sum + item, 0)).toBe(6);
  });

  it('should pass accumulator, value, index, and array to callback', () => {
    const result = [10, 20, 30].myReduce((acc, val, idx, arr) => {
      expect(arr).toEqual([10, 20, 30]);
      return acc + val + idx;
    }, 0);
    expect(result).toBe(10 + 20 + 30 + 0 + 1 + 2); // 63
  });

  it('should return initial value for empty array', () => {
    expect([].myReduce((acc, x) => acc + x, 10)).toBe(10);
  });

  it('should throw on empty array with no initial value', () => {
    expect(() => [].myReduce((acc, x) => acc + x)).toThrow('empty array with no initial value');
  });

  it('should support different accumulator type with initial value', () => {
    expect([1, 2, 3].myReduce((acc, x) => acc + x, '')).toBe('123');
    expect([1, 2, 3].myReduce((acc, x) => ({ ...acc, [x]: x }), {})).toEqual({ 1: 1, 2: 2, 3: 3 });
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    arr.myReduce((acc, x) => acc + x);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('should handle single element without initial value', () => {
    expect([42].myReduce((acc, x) => acc + x)).toBe(42);
  });

  it('should handle single element with initial value', () => {
    expect([42].myReduce((acc, x) => acc + x, 0)).toBe(42);
  });
});
