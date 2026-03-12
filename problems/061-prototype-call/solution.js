Function.prototype.mycall = function(thisArg, ...args) {
  const context = Object(thisArg == undefined ? globalThis : thisArg );
  const func=Symbol();
  context[func]=this;
  const result=context[func](...args);
  delete context[func];
  return result;
}
