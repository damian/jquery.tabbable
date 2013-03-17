/*
 * jquery.tabbable
 * https://github.com/damian/jquery.tabbable
 *
 * Copyright (c) 2013 Damian Nicholson
 * Licensed under the MIT license.
 */
(function($) {

  /**
   * A collection of functions to determine if an element is tabbable
   *
   * @class Subject
   * @static
   */
  var Subject = {

    /**
     * Contains a list of focussable elements
     *
     * @property FOCUSSABLE_ELEMS
     * @type Array
     * @static
     * @final
     */
    FOCUSSABLE_ELEMS : [
      'input',
      'select',
      'textarea',
      'button'
    ],

    /**
     * Determines if the DOMNode is tabbable
     *
     * @method isTabbable
     * @param {Node} elem The DOMNode under question
     * @return {Boolean}
     */
    isTabbable: function(elem) {
      return Subject.hasTabindex(elem) && Subject.isFocussable(elem) && Subject.isVisible(elem);
    },

    /**
     * @method hasTabindex
     * @param {Node} elem The DOMNode under question
     * @return {Boolean}
     */
    hasTabindex: function(elem) {
      return elem.tabIndex >= 0;
    },

    /**
     * @method isVisible
     * @param {Node} elem The DOMNode under question
     * @return {Boolean}
     */
    isVisible: function(elem) {
      return $(elem).is(':visible');
    },

    /**
     * @method isFocussable
     * @param {Node} elem The DOMNode under question
     * @return {Boolean}
     * @private
     */
    isFocussable: function(elem) {
      var node = elem.nodeName,
          regex = new RegExp(Subject.FOCUSSABLE_ELEMS.join('|'), 'gi');

      if (regex.test(node) && !elem.disabled) {
        return true;
      }

      if (/a/i.test(node) && elem.href) {
        return true;
      }

      return false;
    }
  };

  // Adds a tabbable pseudo selector to jQuery
  $.expr[':'].tabbable = Subject.isTabbable;

}(jQuery));
