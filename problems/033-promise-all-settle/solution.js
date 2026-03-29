
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
export function allSettled(promises) {
  return new Promise((resolve,reject) => {
    if(promises.length===0)resolve([]);
    const n=promises.length;
    const ans=new Array(n);
    let curCount=0;
    promises.forEach((promise,idx) => {
      Promise.resolve(promise).then((val)=> {
        ans[idx] = {
          status: 'fulfilled', 
          value: val
        };
      }).catch((err)=> {
        ans[idx]= {
            status: 'rejected', 
            reason: err
          };
      }).finally(() => {
        curCount++;
        if(curCount ===n) {
          resolve(ans);
        }
      })
    })
  })
}

