import { describe, it, expect } from 'vitest';
import { undefinedToNull } from './solution.js';

describe('Problem 176 - undefined to null', () => {
  it('BFE example: object with undefined value', () => {
    const input = { a: undefined, b: 'BFE.dev' };
    const result = undefinedToNull(input);
    expect(result).toEqual({ a: null, b: 'BFE.dev' });
  });

  it('BFE example: nested array with undefined', () => {
    const input = { a: ['BFE.dev', undefined, 'bigfrontend.dev'] };
    const result = undefinedToNull(input);
    expect(result).toEqual({ a: ['BFE.dev', null, 'bigfrontend.dev'] });
  });

  it('should return primitives unchanged', () => {
    expect(undefinedToNull(1)).toBe(1);
    expect(undefinedToNull('str')).toBe('str');
    expect(undefinedToNull(true)).toBe(true);
    expect(undefinedToNull(null)).toBe(null);
    expect(undefinedToNull(undefined)).toBe(undefined);
  });

  it('should handle deeply nested objects', () => {
    const input = { a: { b: undefined, c: { d: undefined } } };
    const result = undefinedToNull(input);
    expect(result).toEqual({ a: { b: null, c: { d: null } } });
  });

  it('should handle top-level array', () => {
    const input = [1, undefined, 3];
    const result = undefinedToNull(input);
    expect(result).toEqual([1, null, 3]);
  });

  it('should handle mixed nesting (object with array with object)', () => {
    const input = { x: [1, { y: undefined }] };
    const result = undefinedToNull(input);
    expect(result).toEqual({ x: [1, { y: null }] });
  });

  it('should leave existing null and other values unchanged', () => {
    const input = { a: null, b: 0, c: false, d: '' };
    const result = undefinedToNull(input);
    expect(result).toEqual({ a: null, b: 0, c: false, d: '' });
  });
});
