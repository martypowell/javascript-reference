var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');

require('../../01-array/array-prototype-move.js');

describe('Array Prototype Move', function(done) {
  it('should move the first item in a 4 item array to the second position ', function(done) {
    var actual = ["cat", "dog", "deer", "mouse"].move(0, 1);
    var expected = ["dog", "cat", "deer", "mouse"];

    expect(actual).to.eql(expected);

    done();
  });

  it('should move the first item to the end of the array when -1 is passed in ', function(done) {
    var actual = ["cat", "dog", "deer", "mouse"].move(0, -1);
    var expected = ["dog", "deer", "mouse", "cat"];

    console.log(actual, expected)

    expect(actual).to.eql(expected);

    done();
  });

  it('should do nothing if the old index and new index are the same', function(done) {
    var actual = ["dog", "cat", "deer", "mouse"].move(0, 0);
    var expected = ["dog", "cat", "deer", "mouse"];
    
    expect(actual).to.eql(expected);

    done();
  });

  it('should throw a console error and return the array unaltered if the new index passed in is greater than the length of the array', function(done) {
    var actual = ["cat", "dog", "deer", "mouse"].move(0, 5);
    var expected = ["cat", "dog", "deer", "mouse"];

    expect(actual).to.eql(expected);

    done();
  });

});