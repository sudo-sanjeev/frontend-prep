

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
  let isWaiting=false;
  let nextArgs=null;

  function cooldown() {
    setTimeout(()=> {
      if(nextArgs && option.trailing) {
        func.apply(this,nextArgs);
        nextArgs=null;
        cooldown();
      } else {
        isWaiting=false;
      }
    },wait);
  }

  return function(...args) {
    if(!isWaiting) {
      isWaiting=true;
      if(option.leading) {
        func.apply(this,args);
      } else {
        nextArgs=args;
      }
      cooldown();
      return;
    }
    nextArgs=args;
  }
}







export { throttle };