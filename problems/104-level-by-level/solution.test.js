/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { flatten } from './solution.js';

function createTree(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
}

describe('Problem 104 - Traverse DOM level by level', () => {
  it('should return empty array for null root', () => {
    expect(flatten(null)).toEqual([]);
  });

  it('should return single element for root with no children', () => {
    const root = document.createElement('div');
    expect(flatten(root)).toEqual([root]);
  });

  it('should flatten simple two-level tree', () => {
    const root = createTree('<div><p></p><span></span></div>');
    const result = flatten(root);
    expect(result).toHaveLength(3);
    expect(result[0]).toBe(root);
    expect(result[1]).toBe(root.children[0]);
    expect(result[2]).toBe(root.children[1]);
  });

  it('should traverse level by level (BFS order)', () => {
    //     div
    //    /   \
    //   p   span
    //  / \    |
    // a   b   c
    const root = createTree('<div><p><a></a><b></b></p><span><c></c></span></div>');
    const p = root.children[0];
    const span = root.children[1];
    const a = p.children[0];
    const b = p.children[1];
    const c = span.children[0];

    const result = flatten(root);
    expect(result).toEqual([root, p, span, a, b, c]);
  });

  it('should handle three levels', () => {
    const root = createTree('<div><section><article></article></section></div>');
    const section = root.children[0];
    const article = section.children[0];

    const result = flatten(root);
    expect(result).toEqual([root, section, article]);
  });
});
