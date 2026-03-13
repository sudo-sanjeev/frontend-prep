/**
 * @param {any} proto
 * @return {object}
 */
export function myObjectCreate(proto) {
  if (proto !== null && typeof proto !== 'object' && typeof proto !== 'function') {
    throw new Error('');
  }
  const obj = {};
  obj.__proto__ = proto;
  return obj;
}