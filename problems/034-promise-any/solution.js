
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
export function any(promises) {
  return new Promise((resolve,reject)=> {
    if(promises.length==0)return reject(new AggregateError(
  'No Promise in Promise.any was resolved', 
  []
));;
    let rejectCount=0;
    const errors= new Array(promises.length);
    promises.forEach((promise,idx) => {
      Promise.resolve(promise).then((val)=> {
        resolve(val);
      },(err) =>{
        rejectCount++;
        errors[idx]=err;
        if(rejectCount===promises.length) {
          reject(new AggregateError(
  'No Promise in Promise.any was resolved', 
  errors
));
        }
      })
    })
  })
}