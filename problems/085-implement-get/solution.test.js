import { describe, it, expect } from 'vitest';
import { get } from './solution.js';

describe('Problem 85 - implement _.get()', () => {
  const obj = {
    a: {
      b: {
        c: [1, 2, 3]
      }
    }
  };

  it('should get nested path with dot notation', () => {
    expect(get(obj, 'a.b.c')).toEqual([1, 2, 3]);
  });

  it('should get array index with dot notation', () => {
    expect(get(obj, 'a.b.c.0')).toBe(1);
  });

  it('should get array index with bracket notation', () => {
    expect(get(obj, 'a.b.c[1]')).toBe(2);
  });

  it('should accept path as array', () => {
    expect(get(obj, ['a', 'b', 'c', '2'])).toBe(3);
  });

  it('should return undefined for out-of-bounds index', () => {
    expect(get(obj, 'a.b.c[3]')).toBeUndefined();
  });

  it('should return defaultValue when path does not exist', () => {
    expect(get(obj, 'a.c', 'bfe')).toBe('bfe');
  });

  it('should return undefined when path does not exist and no default', () => {
    expect(get(obj, 'a.x.y')).toBeUndefined();
  });

  it('should return defaultValue for empty path', () => {
    expect(get(obj, [], 'default')).toBe('default');
  });

  it('should return defaultValue for empty string path', () => {
    expect(get(obj, '', 'default')).toBe('default');
  });

  it('should return root when path is empty array and no default', () => {
    expect(get({ foo: 1 }, [])).toBeUndefined();
  });

  it('should return defaultValue when value is null (treated as undefined)', () => {
    const objWithNull = { a: { b: null } };
    expect(get(objWithNull, 'a.b')).toBeUndefined();
  });

  it('should return defaultValue when traversing through null', () => {
    const objWithNull = { a: { b: null } };
    expect(get(objWithNull, 'a.b.c', 'none')).toBe('none');
  });
});
