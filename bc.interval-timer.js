var IntervalTimer = (function () {
  return function (callback, interval) {
    var timer;
    var startTime;
    var TIMER_STATES = {
      "0": "idle",
      "1": "running",
      "2": "paused",
      "3": "resumed"
    };

    this.interval = interval;
    this.callback = callback;
    this.state = 0;
    this.remainingTimeInInterval = 0;

    var start = function () {
      startTime = new Date();
      timer = setInterval(callback, interval);
      this.state = 1;
    }.bind(this);

    var timeoutCallback = function () {
      if (this.GetState() !== "resumed") {
        return;
      }
      callback();

      startTime = new Date();
      timer = setInterval(callback, interval);
      this.state = 1;
    }.bind(this);

    this.GetState = function () {
      return TIMER_STATES[this.state.toString()];
    }.bind(this);

    this.Pause = function () {
      if (this.GetState() === "paused") {
        return;
      }

      this.remainingTimeInInterval = interval - (new Date() - startTime);
      this.Stop();
      this.state = 2;
    }.bind(this);

    this.Resume = function () {
      if (this.GetState() !== "paused") {
        return;
      }

      this.state = 3;
      setTimeout(timeoutCallback, this.remainingTimeInInterval);
    }.bind(this);

    this.Stop = function () {
      clearInterval(timer);
    }.bind(this);

    start();
  }
})();

module.exports = IntervalTimer;