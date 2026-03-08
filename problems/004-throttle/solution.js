/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  let iswaiting = false;
  let nextArgs = null;

  function cooldown() {
    setTimeout(() => {
      iswaiting = false;
      if (nextArgs) {
        func.apply(this, nextArgs);
        nextArgs = null;
      }
    }, wait);
  }

  return function (...args) {
    if (!iswaiting) {
      iswaiting = true;
      func.apply(this, args);
      cooldown.apply(this);
      return;
    }
    nextArgs = args;
  };
}

export { throttle };
