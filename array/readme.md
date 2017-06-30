# Javascript Array Utilities

## Protytype Methods

### Move
Moves an item in the array from one location to the other

**Params**
* old_index = current position (zero based indexing)
* new_index = position you want the item to go (zero based indexing)
**File Name**: array-move.js

```javascript
var myArr = ["cat", "dog", "deer", "rabbit"];
```

```javascript
/* Requirements: Move the cat to the third position in the array */
myArr.move(0, 2);
```

```javascript
/* Result 
  myArr = ["dog", "deer","cat", "rabbit"]
*/
```
### Max
Gets the maximum number from an Array

```javascript
var myMax = [2, 50, 4, 19].max();

/* Result 
myMax = 50
*/
```

### Min
Gets the minimum number from an Array

```javascript
var myMin = [2, 50, 4, 19].min();

/* Result 
myMin = 2 
*/
```