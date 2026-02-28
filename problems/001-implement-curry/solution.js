/**
 * [BFE.dev Problem 1 - implement curry()]
 * https://bigfrontend.dev/problem/implement-curry
 *
 * @param {Function} fn
 * @returns {Function}
 */
export function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...nextArgs) => curried.apply(this, [...args, ...nextArgs]);
  };
}
