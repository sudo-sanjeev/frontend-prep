import { describe, it, expect } from 'vitest';
import { is } from './solution.js';

describe('Problem 116 - implement Object.is()', () => {
  it('should return true for NaN === NaN (unlike ===)', () => {
    expect(is(NaN, NaN)).toBe(true);
    expect(NaN === NaN).toBe(false);
  });

  it('should return false for 0 === -0 (unlike ===)', () => {
    expect(is(0, -0)).toBe(false);
    expect(0 === -0).toBe(true);
  });

  it('should return true for same +0 and +0', () => {
    expect(is(0, 0)).toBe(true);
  });

  it('should return true for same -0 and -0', () => {
    expect(is(-0, -0)).toBe(true);
  });

  it('should return false for NaN and non-NaN', () => {
    expect(is(NaN, 42)).toBe(false);
    expect(is(42, NaN)).toBe(false);
    expect(is(NaN, undefined)).toBe(false);
  });

  it('should match === for other primitives', () => {
    expect(is(1, 1)).toBe(true);
    expect(is(1, 2)).toBe(false);
    expect(is('a', 'a')).toBe(true);
    expect(is('a', 'b')).toBe(false);
    expect(is(true, true)).toBe(true);
    expect(is(false, false)).toBe(true);
    expect(is(undefined, undefined)).toBe(true);
    expect(is(null, null)).toBe(true);
  });

  it('should return false for same-value primitives that === treats equal', () => {
    expect(is(0, -0)).toBe(false);
  });

  it('should match === for object reference equality', () => {
    const obj = {};
    expect(is(obj, obj)).toBe(true);
    expect(is({}, {})).toBe(false);
  });
});
