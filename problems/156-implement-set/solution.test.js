import { describe, it, expect } from 'vitest';
import { set } from './solution.js';

describe('Problem 156 - implement _.set()', () => {
  it('should set nested path with dot notation', () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    set(obj, 'a.b.c', 'BFE');
    expect(obj.a.b.c).toBe('BFE');
  });

  it('should set array index via dot notation', () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    set(obj, 'a.b.c.0', 'BFE');
    expect(obj.a.b.c[0]).toBe('BFE');
  });

  it('should set array index via bracket notation in string', () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    set(obj, 'a.b.c[1]', 'BFE');
    expect(obj.a.b.c[1]).toBe('BFE');
  });

  it('should set with array path', () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    set(obj, ['a', 'b', 'c', '2'], 'BFE');
    expect(obj.a.b.c[2]).toBe('BFE');
  });

  it('should extend array for out-of-bounds index', () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    set(obj, 'a.b.c[3]', 'BFE');
    expect(obj.a.b.c[3]).toBe('BFE');
  });

  it('should create nested structure with array for valid digit', () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    set(obj, 'a.c.d[0]', 'BFE');
    expect(obj.a.c.d[0]).toBe('BFE');
    expect(Array.isArray(obj.a.c.d)).toBe(true);
  });

  it('should use object property for invalid digit (leading zero)', () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    set(obj, 'a.c.d.01', 'BFE');
    expect(obj.a.c.d['01']).toBe('BFE');
    expect(obj.a.c.d).toEqual({ '01': 'BFE' });
  });

  it('should create new object when path does not exist', () => {
    const obj = {};
    set(obj, 'x.y.z', 42);
    expect(obj.x.y.z).toBe(42);
  });

  it('should overwrite existing value', () => {
    const obj = { a: 1 };
    set(obj, 'a', 99);
    expect(obj.a).toBe(99);
  });

  it('should set value to object or array', () => {
    const obj = {};
    set(obj, 'a', { nested: true });
    expect(obj.a).toEqual({ nested: true });
    set(obj, 'b', [1, 2, 3]);
    expect(obj.b).toEqual([1, 2, 3]);
  });
});
