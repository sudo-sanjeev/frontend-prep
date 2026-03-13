import { describe, it, expect } from 'vitest';
import { myInstanceOf } from './solution.js';

describe('Problem 90 - write your own instanceof', () => {
  it('should return true for class inheritance chain', () => {
    class A {}
    class B extends A {}
    const b = new B();
    expect(myInstanceOf(b, B)).toBe(true);
    expect(myInstanceOf(b, A)).toBe(true);
    expect(myInstanceOf(b, Object)).toBe(true);
  });

  it('should return false when not in prototype chain', () => {
    class A {}
    class B extends A {}
    const b = new B();
    function C() {}
    expect(myInstanceOf(b, C)).toBe(false);
  });

  it('should return true when target.prototype is reassigned to match', () => {
    class A {}
    class B extends A {}
    const b = new B();
    function C() {}
    C.prototype = B.prototype;
    expect(myInstanceOf(b, C)).toBe(true);
  });

  it('should return false when target.prototype is reassigned to different object', () => {
    class A {}
    class B extends A {}
    const b = new B();
    function C() {}
    C.prototype = B.prototype;
    C.prototype = {};
    expect(myInstanceOf(b, C)).toBe(false);
  });

  it('should return false for null', () => {
    expect(myInstanceOf(null, Object)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(myInstanceOf(42, Number)).toBe(false);
    expect(myInstanceOf('hello', String)).toBe(false);
    expect(myInstanceOf(true, Boolean)).toBe(false);
  });

  it('should return true for object wrappers', () => {
    expect(myInstanceOf(new Number(42), Number)).toBe(true);
    expect(myInstanceOf(new String('hi'), String)).toBe(true);
    expect(myInstanceOf(new Boolean(true), Boolean)).toBe(true);
  });

  it('should return true for function instanceof Function', () => {
    const fn = function () {};
    expect(myInstanceOf(fn, Function)).toBe(true);
    expect(myInstanceOf(() => {}, Function)).toBe(true);
  });

  it('should return true for array instanceof Array and Object', () => {
    const arr = [];
    expect(myInstanceOf(arr, Array)).toBe(true);
    expect(myInstanceOf(arr, Object)).toBe(true);
  });

  it('should return true for plain object instanceof Object', () => {
    expect(myInstanceOf({}, Object)).toBe(true);
  });
});
