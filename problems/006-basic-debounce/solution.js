/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  let timeoutId=null;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId=setTimeout(()=> {
      func(...args);
    },wait);
  }
}

export { debounce };
