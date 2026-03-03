Array.prototype.myMap = function(callbackFn, thisArg) {
  const len = this.length;
  const ans=[];

  for(let i=0;i<len;i++) {
    if(i in this)
    ans[i]=callbackFn.call(thisArg,this[i],i,this);
  }
  return ans;
}
