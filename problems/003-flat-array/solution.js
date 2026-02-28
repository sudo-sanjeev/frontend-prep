/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
export function flat(arr, depth = 1) {
  const ans=[];
  for(let i=0;i<arr.length;i++) {
    if(!(i in arr))continue;

    if(Array.isArray(arr[i]) &&  depth>0) {
      ans.push(...flat(arr[i],depth-1));
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
}

