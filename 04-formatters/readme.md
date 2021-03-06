## Formatters

The purpose of this code is to allow you to quickly convert one datatype that has several different formats to another.

### Date/Time

[moment.js](https://momentjs.com/) really rocks for any date/time related formattting

### Phone Numbers

To use include the the code from the [formatters.js](formatters.js)

**Usage**

```javascript
formatters.format('phoneNumber', '222-222-2222', '(xxx) xxx-xxxx'); //Result: (222) 222-2222

formatters.format('phoneNumber', '2222222222', '(xxx) xxx-xxxx'); //Result: (222) 222-2222

formatters.format('phoneNumber', 2222222222, '(xxx) xxx-xxxx'); //Result: (222) 222-2222

formatters.format('phoneNumber', '(222) 222-2222', 'xxx-xxx-xxxx'); //Result: 222-222-2222

formatters.format('phoneNumber', '(222) 222-2222', 'xxxxxxxxxx'); //Result: 2222222222
```