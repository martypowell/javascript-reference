var assert = require('chai').assert;
var sinon = require('sinon');
var IntervalTimer = require('../../03-timers/bc.interval-timer.js');

describe('Interval Timer', function() {
  var self = this;
  self.interval = 1000;
  
  
  beforeEach(function() {
    self.clock = sinon.useFakeTimers();
    self.isStarted = false;
    self.cycles = 0;
    self.timer = new IntervalTimer(function() {
      self.cycles++;
    }, self.interval);
  });

  afterEach(function() {
    self.clock.restore();
  });

  describe('Timer starts', function(done) {
    it('should make it through at least one cycle', function(done) {
      self.clock.tick(self.interval + 250);
      assert.isAbove(self.cycles, 0);
      done();
    });
  });

  describe('Timer pauses', function() {
    it('The timer should have ran through two cycles before it was paused after 2.25 seconds', function(done) {
      self.clock.tick(self.interval * 2 + 250);
      var numberOfCyclesBeforePause = self.cycles;
      self.timer.Pause();
      assert.equal(numberOfCyclesBeforePause, 2);
      done();
    });

    it('Number of cycles should not increase after the timer is paused', function(done) {
      self.clock.tick(self.interval * 2 + 250);
      var numberOfCyclesBeforePause = self.cycles;
      self.timer.Pause();
      self.clock.tick(self.interval * 2 + 250); //This may not be working, see below for other problems with multiple ticks
      var numberOfCyclesAfterPause = self.cycles;
      assert.equal(numberOfCyclesBeforePause, numberOfCyclesAfterPause);
      done();
    });
  });

  describe('Timer resumes', function() {
    it('The timer should have ran through 4 cycles after being paused and resumed', function(done) {
      //TODO: Would like to run the clock for a couple of cycles before pausing to ensure the counter is right, but that does not seem to be work right now.
      self.timer.Pause();
      self.timer.Resume();
      self.clock.tick(self.interval * 4 + 250);
      assert.equal(self.cycles, 4);
      done();
    });
  });

  describe('Timer stops', function() {
    it('The timer should have ran through 6 cycles after being stopped after 6.25 seconds', function(done) {
      //TODO: Would like to run the clock for a couple of cycles before stopping to ensure the counter is right, but that does not seem to be work right now.
      self.clock.tick(self.interval * 6 + 250);
      self.timer.Stop();
      assert.equal(self.cycles, 6);
      done();
    });
  });
});