

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
export function debounce(func, wait, option = {leading: false, trailing: true}) {
  let timeoutId=null;
  
  return function(...args) {
    let isInvoked=false;
    if(!timeoutId && option.leading && !isInvoked) {
      func.apply(this,args);
      isInvoked=true;
    }
    clearTimeout(timeoutId);
    timeoutId=setTimeout(()=> {
      if(option.trailing && !isInvoked) {
        func.apply(this,args);
      }
      timeoutId=null;
    },wait);
  }
}
