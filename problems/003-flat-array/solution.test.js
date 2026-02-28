import { describe, it, expect } from 'vitest';
import { flat } from './solution.js';

describe('Problem 3 - implement Array.prototype.flat()', () => {
  it('should flatten array with default depth 1', () => {
    expect(flat([1, [2, 3]])).toEqual([1, 2, 3]);
  });

  it('should flatten with explicit depth 1', () => {
    expect(flat([1, [2, [3, 4]]], 1)).toEqual([1, 2, [3, 4]]);
  });

  it('should flatten with depth 2', () => {
    expect(flat([1, [2, [3, 4]]], 2)).toEqual([1, 2, 3, 4]);
  });

  it('should flatten deeply nested arrays with higher depth', () => {
    expect(flat([1, [2, [3, [4, [5]]]]], 4)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return as-is when depth is 0', () => {
    const arr = [1, [2, 3]];
    expect(flat(arr, 0)).toEqual([1, [2, 3]]);
  });

  it('should return empty array for empty input', () => {
    expect(flat([])).toEqual([]);
  });

  it('should return already flat array unchanged', () => {
    expect(flat([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should skip holes in sparse arrays', () => {
    expect(flat([1, , 3])).toEqual([1, 3]);
  });

  it('should flatten sparse nested arrays', () => {
    expect(flat([1, , [2, 3]])).toEqual([1, 2, 3]);
  });

  it('should handle nested empty arrays', () => {
    // At depth 1: [] flattens to nothing; [2, []] flattens to [2, []]
    expect(flat([1, [], [2, []]])).toEqual([1, 2, []]);
  });

  it('should preserve mixed types (strings, numbers, objects)', () => {
    const obj = { a: 1 };
    expect(flat([1, ['a', obj], true])).toEqual([1, 'a', obj, true]);
  });

  it('should handle all-nested structure', () => {
    expect(flat([[[1, 2], [3, 4]]], 2)).toEqual([1, 2, 3, 4]);
  });
});
