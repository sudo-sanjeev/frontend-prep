
/**
 * @param {any[]} arr
 */
export function deduplicate(arr) {
  let st= new Set(),i=0;
  while(i<arr.length) {
    if(st.has(arr[i])) {
      arr.splice(i,1);
    } else {
      st.add(arr[i]);
      i++;
    }
  }
  return arr;
}