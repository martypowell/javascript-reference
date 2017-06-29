Array.prototype.move = function (old_index, new_index) {
    var newIndexIsTooLarge = new_index >= this.length;
    if (newIndexIsTooLarge) {
      console.error('The new index is greater than the length of the array');
    }
    if (old_index === new_index || newIndexIsTooLarge) {
      return this;
    }

    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};