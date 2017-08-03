var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');

var formatters = require('../../04-formatters/formatters.js');

describe('Phone Number Formatter', function (done) {

  it('should return the given format xxx-xxx-xxxx', function (done) {
    var input = "(911) 911-4545";
    var format = "xxx-xxx-xxxx";
    var actual = formatters.format('phoneNumber', input, format);

    expect(actual).to.eql("911-911-4545");

    done();
  });

  it('should return the given format (xxx) xxx-xxxx', function (done) {
    var input = "911-911-4545";
    var format = "(xxx) xxx-xxxx";
    var actual = formatters.format('phoneNumber', input, format);

    expect(actual).to.eql("(911) 911-4545");

    done();
  });

  it('should return the given format (xxx) xxx-xxxx with 1 prefix', function (done) {
    var input = "1-911-911-4545";
    var format = "(xxx) xxx-xxxx";
    var actual = formatters.format('phoneNumber', input, format);

    expect(actual).to.eql("(911) 911-4545");

    done();
  });

  it('should return the given format 1 (xxx) xxx-xxxx', function (done) {
    var input = "1-911-911-4545";
    var format = "x (xxx) xxx-xxxx";
    var actual = formatters.format('phoneNumber', input, format);

    expect(actual).to.eql("1 (911) 911-4545");

    done();
  });

   it('should return nothing when there it\'s not possible to format the number and log an error to the console', function (done) {
    var input = "91-911-4545";
    var format = "(xxx) xxx-xxxx";
    var actual = formatters.format('phoneNumber', input, format);
    //TODO: check if teh error is thrown to the console
    expect(actual).to.eql(null);

    done();
  }); 

});