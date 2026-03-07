/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
export function all(promises) {
  
  return new Promise((resolve, reject) => {
    if(promises.length==0) {
      resolve([]);
      return;
    }
    const result=[];
    let countPending=promises.length;
    promises.forEach((promise,index) => {
      Promise.resolve(promise).then((value) => {
        result[index] = value;
        countPending--;
        if (countPending === 0) {
          resolve(result);
        }
      }, reject);
    });
  });
}