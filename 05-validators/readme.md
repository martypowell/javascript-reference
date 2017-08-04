## Validators

The purpose of this code is to allow you to quickly validate a datatype.

### Phone Numbers

To use include the the code from the [validators.js](validators.js)

**Valid Formats**

* (123)456-7890
* (123) 456-7890
* 123-456-7890
* 123.456.7890
* 1234567890 (string and number)
* 19114443333 (string and number)

**Usage**

```javascript
var isValid;

isValid = validators.validate('phoneNumber', '222-222-2222') //Result: true

isValid = validators.validate('phoneNumber', 2222222222) //Result: true

isValid = validators.validate('phoneNumber', '22-222-2222') //Result: false

```