/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
export const myNew = (constructor, ...args) => {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  const returned = constructor.call(obj, ...args)
  if(returned && typeof returned === 'object') {
    return returned
  }
  return obj
}