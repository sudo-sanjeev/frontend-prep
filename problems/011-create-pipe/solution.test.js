import { describe, it, expect } from 'vitest';
import { pipe } from './solution.js';

describe('Problem 11 - create pipe()', () => {
  const times = (y) => (x) => x * y;
  const plus = (y) => (x) => x + y;
  const subtract = (y) => (x) => x - y;
  const divide = (y) => (x) => x / y;

  it('should pipe times(2) and times(3)', () => {
    const piped = pipe([times(2), times(3)]);
    expect(piped(5)).toBe(30); // 5 * 2 * 3
  });

  it('should pipe times(2), plus(3), times(4)', () => {
    const piped = pipe([times(2), plus(3), times(4)]);
    expect(piped(5)).toBe(52); // ((5 * 2) + 3) * 4
  });

  it('should pipe times(2), subtract(3), divide(4)', () => {
    const piped = pipe([times(2), subtract(3), divide(4)]);
    expect(piped(5)).toBe(1.75); // ((5 * 2) - 3) / 4
  });

  it('should return identity for empty funcs', () => {
    const piped = pipe([]);
    expect(piped(42)).toBe(42);
  });

  it('should work with single function', () => {
    const piped = pipe([times(10)]);
    expect(piped(7)).toBe(70);
  });

  it('should work with identity-like function', () => {
    const id = (x) => x;
    const piped = pipe([id, id, times(2)]);
    expect(piped(5)).toBe(10);
  });
});
