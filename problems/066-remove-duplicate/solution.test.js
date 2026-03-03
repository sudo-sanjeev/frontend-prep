import { describe, it, expect } from 'vitest';
import { deduplicate } from './solution.js';

describe('Problem 66 - remove duplicates from an array', () => {
  it('should remove duplicate primitives', () => {
    const arr = [1, 2, 2, 3, 1, 4, 3];
    const result = deduplicate(arr);
    expect(result).toHaveLength(4);
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(4);
    expect(result).toBe(arr);
  });

  it('should modify array in place', () => {
    const arr = [1, 1, 2, 2];
    const result = deduplicate(arr);
    expect(result).toBe(arr);
    expect(arr).toEqual(expect.arrayContaining([1, 2]));
    expect(arr).toHaveLength(2);
  });

  it('should handle empty array', () => {
    const arr = [];
    expect(deduplicate(arr)).toEqual([]);
    expect(deduplicate(arr)).toBe(arr);
  });

  it('should handle array with no duplicates', () => {
    const arr = [1, 2, 3];
    deduplicate(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('should handle array with all same elements', () => {
    const arr = [5, 5, 5, 5];
    deduplicate(arr);
    expect(arr).toEqual([5]);
  });

  it('should handle mixed primitive types', () => {
    const arr = [1, '1', true, 1, '1', null, undefined, null];
    deduplicate(arr);
    expect(arr).toHaveLength(5);
    expect(arr).toContain(1);
    expect(arr).toContain('1');
    expect(arr).toContain(true);
    expect(arr).toContain(null);
    expect(arr).toContain(undefined);
  });

  it('should handle objects by reference', () => {
    const obj = { id: 1 };
    const arr = [obj, { id: 1 }, obj];
    deduplicate(arr);
    expect(arr).toHaveLength(2);
    expect(arr[0]).toBe(obj);
    expect(arr[1]).toEqual({ id: 1 });
  });

  it('should return the same array reference', () => {
    const arr = [1, 2, 1];
    expect(deduplicate(arr)).toBe(arr);
  });
});
