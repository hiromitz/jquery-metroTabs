/**
 * MetroTabs - plugin for jQuery
 * 
 * Tabs plugin for jQuery like Metro UI.
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Depends:
 *   jquery.js
 *   jquery-ui.js
 * 
 * Author: hiromitz ( http://github.com/hiromitz )
 * 
 * TODO
 *   * Detect index and change slide effect left/right
 *   * Content via Ajax
 */
;(function($) {

var pluginName = 'metroTabs';

$[pluginName] = function(el, op) {
	
	var self = this;
	
	// default options here
    this.options = op = $.extend({}, {
        controller: 'ul',
		contents: 'div',
		controllerClass: ''
    }, op);
	
	// animating controller
	this.animateC = false;
	// animating body
	this.animateB = false;
	
	// main element
    this.el = el;
	// controller element
	this.controller = $(el).find(op.controller);
	// list elements
	var lis = this.controller.children();
	// anchors element
	this.anchors = lis.map(function() {
		return $( "a", this )[ 0 ];
	});
	// contents element
	this.contents = $(el).find(op.contents);
	
	
	// add class
	this.controller.addClass('metro-controller clearfix ' + op.controllerClass);
	lis.addClass('metro-lis');
	this.anchors.addClass('metro-anchors');
	lis.first().addClass('metro-lis-current');
	this.contents.addClass('metro-panels').not(':first').hide();
	
	// add click action
	this.anchors.click(function(e) { e.preventDefault(); });
	
	lis.click(function() {
		
		if ($(this).is(".metro-lis-current") || self.animateC || self.animateB) return;
		
		self.animateC = true;
		self.animateB = true;
		
		lis.removeClass('metro-lis-current');
		$(this).addClass('metro-lis-current');
		
		var content = $(this).find('a').attr('href'),
			$prevAll = $(this).prevAll().appendTo(self.controller);
		
		// controller action
		$prevAll.clone().prependTo(self.controller).animate({ width: 0, opacity: 0 }, 'fast', function() {
			$(this).remove();
			$prevAll.fadeIn();
			self.animateC = false;
		});
		
		self.contents.hide().removeClass('metro-panels-current');
		
		// body action
		$(content).addClass('metro-panels-current').show('slide', {direction: 'right'}, function() {
			self.animateB = false;
		});
	});
};

// methods
$[pluginName].prototype = {
    next: function() {
		if(self.animateC || self.animateB) return;
		this.controller.children().next().trigger('click');
		return this;
	},
	prev: function() {
		if(self.animateC || self.animateB) return;
		this.controller.children().last().trigger('click');
		return this;
	}
};

$.fn[pluginName] = function( method, options ) {
    if(typeof method === "object") {
        options = method;
        method = null;
    }
    var res;
    this.each(function() {
        var inst = $.data(this, pluginName) || $.data(this, pluginName, new $[pluginName](this, options));
        if(method) {
            res = inst[method](options);
        }
    });
    return res || this;
};

} (jQuery) );