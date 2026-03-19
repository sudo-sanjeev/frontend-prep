(() => {
  const originSetTimeout = setTimeout;
  const originClearTimeout = clearTimeout;
  const timers = new Set();
  const g = typeof window !== 'undefined' ? window : globalThis;

  g.clearAllTimeout = () => {
    for (const timerId of [...timers]) {
      originClearTimeout(timerId);
      timers.delete(timerId);
    }
  };

  g.setTimeout = (callback, time, ...args) => {
    const callbackWrapper = () => {
      timers.delete(timerId);
      callback(...args);
    };
    const timerId = originSetTimeout(callbackWrapper, time);
    timers.add(timerId);
    return timerId;
  };

  g.clearTimeout = (id) => {
    originClearTimeout(id);
    timers.delete(id);
  };
})();