
/**
 * @param {Function} func
 * @param {(args: any[], newArgs: any[]) => boolean} [isEqual]
 * @returns {any}
 */

function defaultEqual(args,prevArgs) {
  if(!prevArgs || args.length !== prevArgs.length) return false;
  return args.every((item, i) => item === prevArgs[i]);
}

function memoizeOne(func, isEqual=defaultEqual) {
let cache = null;
let prevThis = null;
let prevArgs = null;



return function(...args) {
  
  if(prevArgs && prevThis===this && isEqual(args,prevArgs)) {
    return cache;
  }
  prevThis = this;
  prevArgs = args;
  cache = func.call(this,...args);
  return cache;
};
}