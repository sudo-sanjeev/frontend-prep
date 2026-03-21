import { describe, it, expect } from 'vitest';
import { trim } from './solution.js';

describe('Problem 95 - implement String.prototype.trim()', () => {
  it('should trim spaces from both ends', () => {
    expect(trim('  hello  ')).toBe('hello');
  });

  it('should trim only leading spaces', () => {
    expect(trim('  hello')).toBe('hello');
  });

  it('should trim only trailing spaces', () => {
    expect(trim('hello  ')).toBe('hello');
  });

  it('should return string as-is when no surrounding whitespace', () => {
    expect(trim('hello')).toBe('hello');
  });

  it('should handle tabs and newlines', () => {
    expect(trim('\t\nhello\n\t')).toBe('hello');
  });

  it('should return empty string for all whitespace', () => {
    expect(trim('   ')).toBe('');
    expect(trim('\t\n  ')).toBe('');
  });

  it('should return empty string for empty string', () => {
    expect(trim('')).toBe('');
  });

  it('should preserve internal spaces', () => {
    expect(trim('  hello world  ')).toBe('hello world');
  });

  it('should handle unicode whitespace', () => {
    expect(trim('\u3000hello\u3000')).toBe('hello');
  });
});
