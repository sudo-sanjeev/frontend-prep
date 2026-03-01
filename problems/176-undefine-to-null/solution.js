/**
 * @param {any} arg
 * @returns {any}
 */
function undefinedToNull(arg) {
  if (arg === null || typeof arg !== 'object') {
    return arg;
  }
  for(let key in arg) {
    if(typeof arg[key] === 'undefined') {
      arg[key]=null;
    }
    if(typeof arg[key]=== 'object') {
      undefinedToNull(arg[key]);
    }
  }
  return arg;
}

export { undefinedToNull };
