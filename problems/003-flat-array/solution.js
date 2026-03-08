/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
export function flat(arr, depth = 1) {
  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (!(i in arr)) {
      continue;
    }

    if (Array.isArray(arr[i]) && depth > 0) {
      const returnArr = flat(arr[i], depth - 1);
      for (let j = 0; j < returnArr.length; j++) {
        ans.push(returnArr[j]);
      }
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
}

