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
      const hasPlaceholder = allArgs.some(a => a === ph);

      if (!hasPlaceholder && allArgs.length >= fn.length) {
        return fn.apply(this, allArgs);
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