var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');

require('../../01-array/array-prototype-min.js');

describe('Array Prototype Max', function (done) {

  it('should return the lowest value', function (done) {
    var actual = [10, 9, 19, 45, 60, 0, 2].min();

    expect(actual).to.eql(0);

    done();
  });

  it('should return the lowest negative value', function (done) {
    var actual = [-10, -9, -19, -45, 60, 0, 2].min();

    expect(actual).to.eql(-45);

    done();
  });
});