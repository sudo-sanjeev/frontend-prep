import { describe, it, expect } from 'vitest';
import { myObjectCreate } from './solution.js';

describe('Problem 94 - implement Object.create', () => {
  it('should create object with given prototype', () => {
    const proto = { a: 1, b: 2 };
    const obj = myObjectCreate(proto);
    expect(Object.getPrototypeOf(obj)).toBe(proto);
    expect(obj.a).toBe(1);
    expect(obj.b).toBe(2);
  });

  it('should create object with null prototype (Object.create(null))', () => {
    const obj = myObjectCreate(null);
    expect(Object.getPrototypeOf(obj)).toBe(null);
    expect(obj.toString).toBeUndefined();
  });

  it('should not have own properties besides prototype', () => {
    const proto = { x: 42 };
    const obj = myObjectCreate(proto);
    expect(Object.keys(obj)).toEqual([]);
    expect(obj.x).toBe(42);
  });

  it('should allow prototype chain inheritance', () => {
    const grandProto = { level: 'grand' };
    const proto = myObjectCreate(grandProto);
    proto.level = 'parent';
    const obj = myObjectCreate(proto);
    expect(obj.level).toBe('parent');
    expect(Object.getPrototypeOf(obj)).toBe(proto);
    expect(Object.getPrototypeOf(proto)).toBe(grandProto);
  });

  it('should throw for undefined', () => {
    expect(() => myObjectCreate(undefined)).toThrow();
  });

  it('should throw for primitives', () => {
    expect(() => myObjectCreate(1)).toThrow();
    expect(() => myObjectCreate('str')).toThrow();
    expect(() => myObjectCreate(true)).toThrow();
    expect(() => myObjectCreate(Symbol())).toThrow();
  });

  it('should allow function as prototype (functions are objects)', () => {
    const fn = function () {};
    fn.foo = 'bar';
    const obj = myObjectCreate(fn);
    expect(Object.getPrototypeOf(obj)).toBe(fn);
    expect(obj.foo).toBe('bar');
  });

  it('should allow plain object as prototype', () => {
    const proto = { greet: () => 'hello' };
    const obj = myObjectCreate(proto);
    expect(obj.greet()).toBe('hello');
  });
});
