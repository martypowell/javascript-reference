## Coding Conventions

Additions to the [Airbnb Style Guide ](https://github.com/airbnb/javascript). The goal of this document is to improve the quality of our code by making it more readable and more maintainable.

### Using Keyboard Events

When using [Keyboard Events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) store the keys in a meaningful variable name.

**Example**

```html
<input type="text" onkeydown="myKeyDownFunction(event)"> 
```

```javascript
// bad
function myKeyDownFunction(event) {
    var x = event.keyCode;

    if (x === 27) {  // 27 is the ESC key
        alert ("You pressed the Escape key!");
    }
}

// good
function myKeyDownFunction(event) {
    var keyCode = event.keyCode;
    var isEscKeyPressed = keyCode === 27;

    if (isEscKeyPressed) {  // 27 is the ESC key
        alert ("You pressed the Escape key!");
    }
}
```

*Note:* According to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) the KeyboardEvent.keyCode is depricated and will be replaced with [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)