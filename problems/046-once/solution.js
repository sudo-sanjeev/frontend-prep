/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  let isInvoked=false;
  let result=null;

  return function(...args) {
    if(!isInvoked) {
      isInvoked=true;
      result=func.call(this,...args);
    }
    return result;
  }
}