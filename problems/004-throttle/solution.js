/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  let waiting=false;
  let nextArgs=null;

  function cooldown() {
    setTimeout(()=>{
      if(nextArgs) {
        func.apply(this,nextArgs);
        nextArgs=null;
      }
      waiting=false;
    },wait)
  }

  return function(...args) {
    if(!waiting) {
      func.apply(this,args);
      waiting=true;
      cooldown.apply(this);
      return;
    }
    nextArgs=args;
  }
}

export { throttle };
