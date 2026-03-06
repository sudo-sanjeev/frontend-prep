/**
 * @param {object} obj
 * @param {string | string[]} path
 * @param {any} value
 */
export function set(obj, path, value) {
  const strArr = Array.isArray(path)?path: path.replace('[','.').replace(']','').split('.');
  let objRef = obj;
  strArr.forEach((part,i)=> {
    if(i===strArr.length-1) {
      objRef[part]= value;
    } else {
      if(!objRef[part]) {
        const nextPart = strArr[i+1];
        objRef[part]= String(Number(nextPart))===nextPart?[]:{};
      }
      objRef=objRef[part];
    }
  })
}