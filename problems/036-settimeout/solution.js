class FakeTimer {
  constructor() {
    this.original = {
      setTimeout: window.setTimeout,
      clearTimeout: window.clearTimeout,
      dateNow: Date.now
    }
    this.currentTime = 0;
    this.timerId = 1;
    this.queue = [];
  }
  install() {
    window.setTimeout = (cb, delay, ...args) => {
      const id = this.timerId++;
      this.queue.push({id, cb, time: this.currentTime + delay, args});
      this.queue.sort((a, b) => b.time - a.time);
      return id;
    };
    window.clearTimeout = (removeId) => {
      this.queue = this.queue.filter(({id}) => id !== removeId);
    };
    Date.now = () => this.currentTime;
  }
  uninstall() {
    window.setTimeout = this.original.setTimeout;
    window.clearTimeout = this.original.clearTimeout;
    Date.now = this.original.dateNow;
  }
  tick() {
    while(this.queue.length > 0) {
      const {cb, time, args} = this.queue.pop();
      this.currentTime = time;
      cb(...args);
    }
  }
}