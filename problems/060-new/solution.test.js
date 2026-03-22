import { describe, it, expect } from 'vitest';
import { myNew } from './solution.js';

describe('Problem 60 - create your own new operator', () => {
  it('should create instance with prototype chain', () => {
    function Person(name) {
      this.name = name;
    }
    const p = myNew(Person, 'Alice');
    expect(p).toBeInstanceOf(Person);
    expect(p.name).toBe('Alice');
    expect(Object.getPrototypeOf(p)).toBe(Person.prototype);
  });

  it('should pass multiple arguments to constructor', () => {
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }
    const pt = myNew(Point, 1, 2);
    expect(pt.x).toBe(1);
    expect(pt.y).toBe(2);
  });

  it('should return constructor result when it returns an object', () => {
    function Foo() {
      return { custom: 42 };
    }
    const result = myNew(Foo);
    expect(result).toEqual({ custom: 42 });
    expect(result).not.toBeInstanceOf(Foo);
  });

  it('should ignore constructor primitive return and use created object', () => {
    function Bar() {
      this.x = 1;
      return 42;
    }
    const b = myNew(Bar);
    expect(b).toBeInstanceOf(Bar);
    expect(b.x).toBe(1);
  });

  it('should ignore constructor null return', () => {
    function Baz() {
      this.x = 1;
      return null;
    }
    const b = myNew(Baz);
    expect(b).toBeInstanceOf(Baz);
    expect(b.x).toBe(1);
  });

  it('should return constructor result when it returns an array', () => {
    function Arr() {
      return [1, 2, 3];
    }
    const result = myNew(Arr);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should work with no arguments', () => {
    function Empty() {
      this.initialized = true;
    }
    const e = myNew(Empty);
    expect(e.initialized).toBe(true);
  });
});
