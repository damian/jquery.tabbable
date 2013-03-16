/*! jQuery Tabbable - v0.1.0 - 2013-03-16
* https://github.com/damian/jquery.tabbable
* Copyright (c) 2013 Damian Nicholson; Licensed MIT */

(function($) {

  var FOCUSSABLE_ELEMS = [
    'input',
    'select',
    'textarea',
    'button'
  ];

  // Custom selector.
  $.expr[':'].tabbable = function(elem) {
    return isTabbable(elem) && isFocussable(elem) && isVisible(elem);
  };

  function isTabbable(elem) {
    return elem.tabIndex >= 0;
  }

  function isVisible(elem) {
    return $(elem).is(':visible');
  }

  function isFocussable(elem) {
    var node = elem.nodeName,
        regex = new RegExp(FOCUSSABLE_ELEMS.join('|'), 'gi');

    if (regex.test(node) && !elem.disabled) {
      return true;
    }

    if (/a/i.test(node) && elem.href) {
      return true;
    }

    return false;
  }

}(jQuery));
