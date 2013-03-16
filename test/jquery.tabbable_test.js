/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery:tabbable', {
    setup: function() {
      this.elems = $('#qunit-fixture').find(':tabbable');
    }
  });

  test('has 4 elements', 1, function() {
    strictEqual(this.elems.length, 4);
  });

  test('should not include hidden elements', 1, function() {
    strictEqual(this.elems.filter(':hidden').length, 0);
  });

  test('should not include disabled elements', 1, function() {
    strictEqual(this.elems.filter(':disabled').length, 0);
  });

  test('should include only anchors with an href attribute', 1, function() {
    strictEqual(this.elems.filter('a').length, 1);
  });
}(jQuery));
