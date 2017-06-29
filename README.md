# Baltimore County Javascript Utilities

More to come...

## Interval Timer

Adds functionality to the [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) method.

### Usages
```javascript
var intervalTimer = new IntervalTimer(function() {
  console.log("I fire every 60 seconds");
}, 60000);
```

### Pause
```javascript
$(document).on('click', '#pauseButton', function() {
  intervalTimer.Pause();
});
```

### Resume
```javascript
$(document).on('click', '#resumeButton', function() {
  intervalTimer.Resume();
});
```