/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { findCorrespondingNode } from './solution.js';

function createTree(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
}

describe('Problem 19 - find corresponding node in two identical DOM trees', () => {
  it('should return rootB when nodeA is rootA', () => {
    const rootA = createTree('<div><p></p></div>');
    const rootB = rootA.cloneNode(true);
    expect(findCorrespondingNode(rootA, rootB, rootA)).toBe(rootB);
  });

  it('should find corresponding child in tree B', () => {
    const rootA = createTree('<div><p></p><span></span></div>');
    const rootB = rootA.cloneNode(true);
    const pA = rootA.children[0];
    const pB = rootB.children[0];
    expect(findCorrespondingNode(rootA, rootB, pA)).toBe(pB);
  });

  it('should find corresponding node at deeper level', () => {
    const rootA = createTree('<div><section><article></article></section></div>');
    const rootB = rootA.cloneNode(true);
    const articleA = rootA.children[0].children[0];
    const articleB = rootB.children[0].children[0];
    expect(findCorrespondingNode(rootA, rootB, articleA)).toBe(articleB);
  });

  it('should find second sibling correctly', () => {
    const rootA = createTree('<div><a></a><b></b><c></c></div>');
    const rootB = rootA.cloneNode(true);
    const bA = rootA.children[1];
    const bB = rootB.children[1];
    expect(findCorrespondingNode(rootA, rootB, bA)).toBe(bB);
  });

  it('should handle nested structure', () => {
    //   div
    //  /   \
    // p    span
    // |     |
    // a     b
    const rootA = createTree('<div><p><a></a></p><span><b></b></span></div>');
    const rootB = rootA.cloneNode(true);
    const aA = rootA.children[0].children[0];
    const aB = rootB.children[0].children[0];
    const bA = rootA.children[1].children[0];
    const bB = rootB.children[1].children[0];

    expect(findCorrespondingNode(rootA, rootB, aA)).toBe(aB);
    expect(findCorrespondingNode(rootA, rootB, bA)).toBe(bB);
  });

  it('should return null when nodeA is not in rootA tree', () => {
    const rootA = createTree('<div><p></p></div>');
    const rootB = rootA.cloneNode(true);
    const otherNode = document.createElement('div');
    expect(findCorrespondingNode(rootA, rootB, otherNode)).toBe(null);
  });
});
