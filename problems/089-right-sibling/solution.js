/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElement | null}
 */
export function nextRightSibling(root, target) {
  if (!root) return null;

  let level = [root];

  while (level.length) {
    const nextLevel = [];
    for (let i = 0; i < level.length; i++) {
      if (level[i] === target) {
        return i < level.length - 1 ? level[i + 1] : null;
      }
      for (const child of level[i].children) {
        nextLevel.push(child);
      }
    }
    level = nextLevel;
  }
  return null;
}
