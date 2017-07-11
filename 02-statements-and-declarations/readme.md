## Tips and Tricks

### For Loop - Caching Array Length
When processing large arrays the following method will recalculate the length of the each time the loop is processed.

**Original**
```javascript
for (var i = 0; i < array.length; i++) {  
    console.log(array[i]);
}
```

A better performing method is cache the array length in a variable avoiding the recalculation.

**Better**

```javascript
for (var i = 0, length = array.length; i < length; i++) {  
    console.log(array[i]);
}
```
[(source)](https://medium.com/@harrisondavis/12-extremely-useful-hacks-for-javascript-f88d52706c3b)