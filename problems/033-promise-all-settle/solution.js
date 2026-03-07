
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
export function allSettled(promises) {
  return new Promise((resolve,reject)=> {
    if(promises.length==0)return resolve([]);

    const result = [];
    let count=0;
    promises.forEach((promise,idx)=> {
      Promise.resolve(promise).then((val)=> {
        count++;
        result[idx]={
          status: "fulfilled",
          value: val
        }
        if (count === promises.length) resolve(result)
      },(err)=> {
        count++;
        result[idx]= {
          status: "rejected",
          reason: err
        }
        if (count === promises.length) resolve(result)
      })
    })
  })
}

