Array.prototype.myReduce = function (callbackfn, initialValue) {
  const argumentLength = arguments.length;
  let acc = argumentLength === 1 ? this[0] : initialValue;
  if(argumentLength===1 && this.length==0)throw new Error("empty array with no initial value");
  let idx = argumentLength === 1 ? 1 : 0;
  for(let i=idx;i<this.length;i++) {
    acc = callbackfn(acc, this[i], i, this);
  }  
  return acc;
}
