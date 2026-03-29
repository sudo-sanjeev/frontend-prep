
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
export function any(promises) {
  return new Promise((resolve,reject) => {
      const n=promises.length;
      const errors = new Array(n);
      let count=0;
      if(n===0) {
        reject(new AggregateError('No Promise in Promise.any was resolved',[]))
      }
      promises.forEach((promise,idx) => {
        Promise.resolve(promise).then((val)=> {
          resolve(val);
        }).catch((err)=> {
          count++;
          errors[idx]=err;
        }).finally(()=>{
          if(count===n) {
            reject(new AggregateError('No Promise in Promise.any was resolved', errors))
          }
        });
      })
  })
}