import { describe, it, expect } from 'vitest';
import { chunk } from './solution.js';

describe('Problem 131 - implement _.chunk()', () => {
  it('should chunk with size 1', () => {
    expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
  });

  it('should chunk with size 2', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should chunk with size 3', () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
  });

  it('should chunk with size 4', () => {
    expect(chunk([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
  });

  it('should chunk with size equal to array length', () => {
    expect(chunk([1, 2, 3, 4, 5], 5)).toEqual([[1, 2, 3, 4, 5]]);
  });

  it('should return empty array for size 0', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
  });

  it('should return empty array for negative size', () => {
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  it('should return empty array for empty input', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it('should handle mixed types', () => {
    expect(chunk([1, 'a', {}, null, undefined], 2)).toEqual([[1, 'a'], [{}, null], [undefined]]);
  });

  it('should handle size larger than array length', () => {
    expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
  });
});
