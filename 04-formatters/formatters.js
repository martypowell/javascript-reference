var formatters = (function () {
  var _formatters = {
    phoneNumber: function (str, format) {
      var exp = /\d+/g;
      var numbersOnly = str.match(exp).join('').split('');
      var numberOfXs = format.split('').filter(function (char) {
        return char === 'x';
      }).length;
      var hasOneAsPrefix = numberOfXs + 1 === numbersOnly.length;

      // 1 has been included in the str, but is not in the desired format
      if (hasOneAsPrefix) {
        numbersOnly.shift();
      }

      if (numberOfXs === numbersOnly.length || hasOneAsPrefix) {
        numbersOnly.forEach(function (number) {
          format = format.replace('x', number);
        });
      }
      else {
        console.error("Incorrect Format. Double Check your values.");
        return null;
      }

      return format;
    }
  };

  function format(key, val, strFormat) {
    return _formatters[key](val, strFormat);
  }

  return {
    format: format
  };
})();

module.exports = formatters;