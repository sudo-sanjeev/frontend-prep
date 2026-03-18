
/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
export function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return new Promise((resolve, reject) => {

    let retryCount=0;
    const callBack = ()=> {
      fetcher().then((val)=> {
        resolve(val);
      },(err)=> {
        if(retryCount>=maximumRetryCount) {
          reject(err);
        } else {
          retryCount++;
          callBack();
        }
      })
    }

    callBack();
  })
}