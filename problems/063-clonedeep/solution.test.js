import { describe, it, expect } from 'vitest';
import { cloneDeep } from './solution.js';

describe('Problem 63 - create _.cloneDeep()', () => {
  it('should return primitives as-is', () => {
    expect(cloneDeep(42)).toBe(42);
    expect(cloneDeep('hello')).toBe('hello');
    expect(cloneDeep(true)).toBe(true);
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(undefined)).toBe(undefined);
  });

  it('should deep clone plain objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
  });

  it('should deep clone arrays', () => {
    const arr = [1, [2, [3]], 4];
    const cloned = cloneDeep(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
    expect(cloned[1][1]).not.toBe(arr[1][1]);
  });

  it('should deep clone mixed structures', () => {
    const obj = { a: [1, { b: 2 }], c: { d: [3, 4] } };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.a).not.toBe(obj.a);
    expect(cloned.a[1]).not.toBe(obj.a[1]);
  });

  it('should handle circular references', () => {
    const obj = { a: 1 };
    obj.self = obj;
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual({ a: 1, self: cloned });
    expect(cloned.self).toBe(cloned);
  });

  it('should handle circular references in nested structures', () => {
    const obj = { a: { b: {} } };
    obj.a.b.ref = obj.a;
    const cloned = cloneDeep(obj);
    expect(cloned.a.b.ref).toBe(cloned.a);
  });

  it('should not mutate original', () => {
    const obj = { a: 1, b: [2, 3] };
    const cloned = cloneDeep(obj);
    cloned.a = 99;
    cloned.b.push(4);
    expect(obj).toEqual({ a: 1, b: [2, 3] });
  });

  it('should handle empty object and array', () => {
    expect(cloneDeep({})).toEqual({});
    expect(cloneDeep([])).toEqual([]);
  });

  it('should preserve Symbol keys', () => {
    const sym = Symbol('key');
    const obj = { [sym]: 42, a: 1 };
    const cloned = cloneDeep(obj);
    expect(cloned[sym]).toBe(42);
    expect(cloned.a).toBe(1);
  });
});
