class EventEmitter {
  subscription = new Map();
  subscribe(eventName, callback) {
  	if(!this.subscription.has(eventName)) {
      this.subscription.set(eventName,new Set());
    }

    const subscriptions= this.subscription.get(eventName);
    const callbackObj = {callback}
    subscriptions.add(callbackObj);

    return {
      release: ()=> {
        subscriptions.delete(callbackObj);
      }
    }
  }
  
  emit(eventName, ...args) {
  	const subscriptions= this.subscription.get(eventName);
    if(subscriptions) {
      subscriptions.forEach((callbackObj) => {
        callbackObj.callback.apply(this, args);
      })
    }
  }
}

export { EventEmitter };