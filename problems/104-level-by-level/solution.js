/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
export function flatten(root) {
  const ans=[];
  if(!root)return ans;
  const queue=[root];

  while(queue.length) {
    const front = queue.shift();
    ans.push(front);
    for(let child of front.children) {
      if(child)queue.push(child);
    }
  }

  return ans;
}