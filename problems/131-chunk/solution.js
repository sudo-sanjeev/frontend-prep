/** 
 * @param {any[]} items
 * @param {number} size
 * @returns {any[][]}
 */
export function chunk(items, size) {
  if (size < 1) return [];
  const ans = [];
  for(let i=0;i<items.length;i+=size) {
    ans.push(items.slice(i,i+size));
  }
  return ans;
}
