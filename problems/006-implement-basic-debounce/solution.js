/**
 * [BFE.dev Problem 6 - implement basic debounce()]
 * https://bigfrontend.dev/problem/implement-basic-debounce
 *
 * @param {Function} func
 * @param {number} wait
 * @returns {Function}
 */
export function debounce(func, wait) {
  let timeoutId = null;
  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), wait);
  };
}
