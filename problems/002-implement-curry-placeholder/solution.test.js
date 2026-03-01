import { describe, it, expect } from 'vitest';
import { curry } from './solution.js';

describe('Problem 2 - implement curry() with placeholder support', () => {
  const _ = curry.placeholder;

  it('should work without placeholders (like basic curry)', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`;
    const curriedJoin = curry(join);

    expect(curriedJoin(1, 2, 3)).toBe('1_2_3');
    expect(curriedJoin(1)(2, 3)).toBe('1_2_3');
    expect(curriedJoin(1, 2)(3)).toBe('1_2_3');
    expect(curriedJoin(1)(2)(3)).toBe('1_2_3');
  });

  it('BFE example: curriedJoin(_, 2)(1, 3) → 1_2_3', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`;
    const curriedJoin = curry(join);

    expect(curriedJoin(_, 2)(1, 3)).toBe('1_2_3');
  });

  it('BFE example: curriedJoin(_, _, _)(1)(_, 3)(2) → 1_2_3', () => {
    const join = (a, b, c) => `${a}_${b}_${c}`;
    const curriedJoin = curry(join);

    expect(curriedJoin(_, _, _)(1)(_, 3)(2)).toBe('1_2_3');
  });

  it('should fill placeholders across multiple calls', () => {
    const sum = (a, b, c) => a + b + c;
    const curriedSum = curry(sum);

    expect(curriedSum(_, 10)(5)(15)).toBe(30); // b=10, a=5, c=15
    expect(curriedSum(_, _, 100)(1)(2)).toBe(103); // a=1, b=2, c=100
  });

});
