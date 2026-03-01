/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  const ph=curry.placeholder;

  function mergeArgs(prevArg,args) {
    const merge = [];
    let j=0;
    for(let i=0;i<prevArg.length;i++) {
      if(prevArg[i]===ph && j<args.length) {
        merge.push(args[j++]);
      } else {
        merge.push(prevArg[i]);
      }
    }
    while(j<args.length) {
      merge.push(args[j++]);
    }
    return merge;
  }
  
  function curriedInternal(prev) {
    return function curried(...args) {
      const allArgs = mergeArgs(prev, args);
      const head = allArgs.slice(0, fn.length);
      const hasPlaceholder = head.some(a => a === ph);

      if (allArgs.length >= fn.length && !hasPlaceholder) {
        return fn.apply(this, [...head]);
      }
      return (...moreArgs) => {
        return curriedInternal(allArgs).apply(this, moreArgs);
      };
    };
  }
  return curriedInternal([]);
}

curry.placeholder = Symbol();

export { curry };