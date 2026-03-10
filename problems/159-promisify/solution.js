/**
 * @param {(...args: any[]) => void} func
 * @returns {(...args: any[]) => Promise<any>}
 */
export function promisify(func) {

  return function(...args) {
    return new Promise((resolve,reject)=> {
      const callback = (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      };
      func.call(this,...args,callback);
    });
  }
}
