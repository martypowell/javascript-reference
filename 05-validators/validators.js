var validators = (function () {
  var _validators = {
    phoneNumber: function (str) {
      //valid formats
      /**
      	(123)456-7890
      	(123) 456-7890
        123-456-7890
        123.456.7890
        1234567890
        +31636363634
        075-63546725
      */
      //var exp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
      var exp = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
      return exp.test(str);
    }
  }

  function validate(key, val) {
    return _validators[key](val);
  }

  return {
    validate: validate
  };
})();

module.exports = validators;