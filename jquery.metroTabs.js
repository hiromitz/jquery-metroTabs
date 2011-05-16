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
 * 
 * Author: hiromitz ( http://github.com/hiromitz )
 * 
 */
;(function($) {

var pluginName = 'metroTabs';

$[pluginName] = function(el, op) {
    this.options = op = $.extend({}, {
        // default options here
        
    }, op);
    this.el = el;
};
$[pluginName].prototype = {
    methodName: function() { return this; }
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