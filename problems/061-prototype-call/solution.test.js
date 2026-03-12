import { describe, it, expect } from 'vitest';
import './solution.js';

describe('Problem 61 - create Function.prototype.call', () => {
  it('should call function with this context', () => {
    const obj = { value: 42 };
    function getValue() {
      return this.value;
    }
    expect(getValue.mycall(obj)).toBe(42);
  });

  it('should pass arguments to the function', () => {
    function add(a, b) {
      return a + b;
    }
    expect(add.mycall(null, 2, 3)).toBe(5);
  });

  it('should use this context and arguments together', () => {
    const obj = { x: 10 };
    function sum(a, b) {
      return this.x + a + b;
    }
    expect(sum.mycall(obj, 1, 2)).toBe(13);
  });

  it('should work with null/undefined thisArg (global object)', () => {
    function returnThis() {
      return this;
    }
    const result = returnThis.mycall(null);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('should work with primitive thisArg (converted to object)', () => {
    function getType() {
      return typeof this;
    }
    expect(getType.mycall(1)).toBe('object');
    expect(getType.mycall('a')).toBe('object');
  });

  it('should return value from called function', () => {
    function greet() {
      return `Hello, ${this.name}`;
    }
    expect(greet.mycall({ name: 'World' })).toBe('Hello, World');
  });

  it('should work with no arguments', () => {
    function noArgs() {
      return 42;
    }
    expect(noArgs.mycall(null)).toBe(42);
  });
});
