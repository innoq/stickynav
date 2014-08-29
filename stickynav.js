/*jslint vars: true, unparam: true, browser: true, white: true */
/*global jQuery */

// sticky nav bar
// adapted from http://twitter.github.com/bootstrap/assets/js/application.js
var StickyNav = (function($) {

"use strict";

var win = $(window);

// `selector` specifies the element whose visibility determines activation
// `options.fixedClass` can be used to customize the class being added
// `options.callback` is invoked whenever the state changes
var StickyNav = function(selector, options) {
	options = options || {};

	this.root = selector.jquery ? selector : $(selector);
	this.root.addClass("sticky");

	this.callback = options.callback;
	this.fixedClass = options.fixedClass || "fixed";
	this.fixed = false;

	this.navTop = this.root.length && this.root.offset().top;

	win.on("scroll", $.proxy(this.onScroll, this)).trigger("scroll");
};
StickyNav.prototype.onScroll = function(ev) {
	if(this.root.filter(":visible").length === 0) {
		return;
	}

	var scrollTop = win.scrollTop();
	var toggled;
	if(!this.fixed && scrollTop > this.navTop) {
		this.fixed = true;
		this.root.addClass(this.fixedClass);
		toggled = true;
	} else if(this.fixed && scrollTop <= this.navTop) {
		this.fixed = false;
		this.root.removeAttr("style").removeClass(this.fixedClass);
		toggled = true;
	}

	if(toggled && this.callback) {
		this.callback(this.fixed);
	}
};

return StickyNav;

}(jQuery));
