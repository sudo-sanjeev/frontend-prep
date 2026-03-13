/**
 * @param {any} obj
 * @param {Function} target
 * @return {boolean}
 */
export function myInstanceOf(obj, target) {
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return false;
  }

  while (obj) {
    if (Object.getPrototypeOf(obj) === target.prototype) {
      return true;
    }
    obj = Object.getPrototypeOf(obj);
  }

  return false;
}