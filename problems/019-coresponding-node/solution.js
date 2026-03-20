/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 * @return {HTMLElement | null}
 */
export function findCorrespondingNode(rootA, rootB, nodeA) {
  if (rootA === nodeA) return rootB;

  const queueA = [rootA];
  const queueB = [rootB];

  while (queueA.length) {
    const currentA = queueA.shift();
    const currentB = queueB.shift();

    if (currentA === nodeA) return currentB;

    queueA.push(...currentA.children);
    queueB.push(...currentB.children);
  }
  return null;
}