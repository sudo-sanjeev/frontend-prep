import { describe, it, expect } from 'vitest';
import './solution.js';

describe('Problem 151 - implement Array.prototype.map()', () => {
  it('should double each element', () => {
    expect([1, 2, 3].myMap(num => num * 2)).toEqual([2, 4, 6]);
  });

  it('should pass element, index, and array to callback', () => {
    const result = [10, 20, 30].myMap((el, idx, arr) => {
      expect(arr).toEqual([10, 20, 30]);
      return el + idx;
    });
    expect(result).toEqual([10, 21, 32]);
  });

  it('should return empty array for empty input', () => {
    expect([].myMap(x => x * 2)).toEqual([]);
  });

  it('should handle sparse arrays (preserve holes)', () => {
    const arr = [1, , 3];
    const result = arr.myMap(x => x * 2);
    expect(result).toEqual([2, , 6]);
    expect(result).toHaveLength(3);
  });

  it('should only call callback for existing indexes in sparse array', () => {
    const callCount = { count: 0 };
    [1, , 3].myMap(() => {
      callCount.count++;
      return 0;
    });
    expect(callCount.count).toBe(2);
  });

  it('should respect thisArg', () => {
    const obj = { multiplier: 10 };
    expect([1, 2, 3].myMap(function (x) {
      return x * this.multiplier;
    }, obj)).toEqual([10, 20, 30]);
  });

  it('should handle various return types', () => {
    expect([1, 2, 3].myMap(x => String(x))).toEqual(['1', '2', '3']);
    expect([1, 2, 3].myMap(x => ({ value: x }))).toEqual([
      { value: 1 },
      { value: 2 },
      { value: 3 },
    ]);
  });

  it('should not mutate the original array', () => {
    const arr = [1, 2, 3];
    arr.myMap(x => x * 2);
    expect(arr).toEqual([1, 2, 3]);
  });
});
