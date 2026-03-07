
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
export function race(promises) {
  return new Promise((resolve, reject) => {
    if(promises.length==0) {
      resolve(null);
    }

    promises.forEach((promise)=> {
      Promise.resolve(promise).then((val)=> {
        resolve(val);
      },(val)=>{
        reject(val)
      })
    })
  })
}