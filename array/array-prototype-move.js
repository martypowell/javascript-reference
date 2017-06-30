(function () {
  if (!Array.prototype.move) {
    Array.prototype.move = function (old_index, new_index) {
      var newIndexIsTooLarge = new_index >= this.length;
      if (newIndexIsTooLarge) {
        console.error('The new index is greater than the length of the array');
      }
      if (this.length === 0 || newIndexIsTooLarge) {
        return this;
      }
      while (old_index < 0) {
        old_index += this.length;
      }
      while (new_index < 0) {
        new_index += this.length;
      }
      if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
          this.push(undefined);
        }
      }
      this.splice(new_index, 0, this.splice(old_index, 1)[0]);
      return this; // for testing purposes
    };
  }
})(this);