## Tips and Tricks

### Caching Array Length inside For Loop
When processing large arrays the following method will recalculate the length of the each time the loop is processed.

**Original**
```javascript
for (var i = 0; i < array.length; i++) {  
    console.log(array[i]);
}
```

A better performing method is cache the array length in a variable avoiding the recalculation. 
```javascript
for (var i = 0, length = array.length; i < length; i++) {  
    console.log(array[i]);
}
```