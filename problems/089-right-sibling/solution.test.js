/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { nextRightSibling } from './solution.js';

function createTree(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
}

describe('Problem 89 - Next Right Sibling', () => {
  it('should return null for null root', () => {
    const target = document.createElement('div');
    expect(nextRightSibling(null, target)).toBe(null);
  });

  it('should return null when target is root (no siblings)', () => {
    const root = document.createElement('div');
    expect(nextRightSibling(root, root)).toBe(null);
  });

  it('should return next sibling when target has one', () => {
    const root = createTree('<div><p></p><span></span></div>');
    const p = root.children[0];
    const span = root.children[1];
    expect(nextRightSibling(root, p)).toBe(span);
  });

  it('should return null when target is last sibling', () => {
    const root = createTree('<div><p></p><span></span></div>');
    const span = root.children[1];
    expect(nextRightSibling(root, span)).toBe(null);
  });

  it('should return null when target is root with children', () => {
    const root = createTree('<div><p></p><span></span></div>');
    expect(nextRightSibling(root, root)).toBe(null);
  });

  it('should find next sibling at deeper level', () => {
    //   div
    //  /  \
    // p   span
    // |    |
    // a    b
    const root = createTree('<div><p><a></a></p><span><b></b></span></div>');
    const p = root.children[0];
    const span = root.children[1];
    const a = p.children[0];
    const b = span.children[0];

    expect(nextRightSibling(root, a)).toBe(b);
    expect(nextRightSibling(root, b)).toBe(null);
  });

  it('should handle three siblings', () => {
    const root = createTree('<div><a></a><b></b><c></c></div>');
    const a = root.children[0];
    const b = root.children[1];
    const c = root.children[2];

    expect(nextRightSibling(root, a)).toBe(b);
    expect(nextRightSibling(root, b)).toBe(c);
    expect(nextRightSibling(root, c)).toBe(null);
  });
});
