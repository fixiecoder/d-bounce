var assert = require('assert');
var sinon = require('sinon');
var dBounce = require('../src/index.js');

describe('d-bounce', function() {
  describe('callback invoked', function() {
    it('should invoke the callback without error', function(done) {
      dBounce(() => {
        done();
      }, 'test-01', 200)
    });
  });

  describe('callback cancelled', function() {
    it('should invoke the callback without error', function(done) {
      dBounce(() => {
        done(new Error('callback should not be invoked'));
      }, 'test-01', 100);

      setTimeout(() => {
        dBounce(null, 'test-01', 50);
      });
      setTimeout(done, 200);
    });
  });

  describe('mulitple identifiers', function() {
    it('callback invoked once for each identifier', function(done) {
      const callback = sinon.spy();

      dBounce(callback, 'test-01', 100);
      dBounce(callback, 'test-02', 100);

      setTimeout(() => {
        assert(callback.calledTwice);
        done();
      }, 200);
    });
  });
});