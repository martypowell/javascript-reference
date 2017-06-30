var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');

require('../../array/array-prototype-max.js');

describe('Array Prototype Max', function (done) {

  it('should return the highest value', function (done) {
    var actual = [10, 9, 19, 45, 60, 0, 2].max();

    expect(actual).to.eql(60);

    done();
  });

  it('should return the highest negative value', function (done) {
    var actual = [-10, -9, -19, -45, -2].max();

    expect(actual).to.eql(-2);

    done();
  });
});



