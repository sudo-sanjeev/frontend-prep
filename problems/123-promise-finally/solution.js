/**
 * @param {Promise<any>} promise
 * @param {() => void} onFinally
 * @returns {Promise<any>}
 */
export function myFinally(promise, onFinally) {
  return promise.then(async (val) => {
    await onFinally();
    return Promise.resolve(val);
  },async (err) => {
    await onFinally();
    return Promise.reject(err);
  })
}