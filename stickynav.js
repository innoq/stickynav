/*jslint vars: true, unparam: true, browser: true, white: true */
/*global jQuery */

// sticky nav bar
// adapted from http://twitter.github.com/bootstrap/assets/js/application.js
var StickyNav = (function($) {

"use strict";

var win = $(window);

// root may be a jQuery object, a DOM element or a selector
var StickyNav = function(root) {
	this.root = root.jquery ? root : $(root);

	this.root.addClass("sticky");
	this.navTop = this.root.length && this.root.offset().top;

	win.on("scroll", $.proxy(this.onScroll, this));
	this.onScroll();
};
$.extend(StickyNav.prototype, {
	fixed: false,
	fixedClass: "fixed"
});
StickyNav.prototype.onScroll = function(ev) {
	if(this.root.filter(":visible").length === 0) {
		return;
	}
	var scrollTop = win.scrollTop();
	if(scrollTop > this.navTop && !this.fixed) {
		var width = this.root.innerWidth();
		this.fixed = true;
		this.root.css({ width: width }).addClass(this.fixedClass);
	} else if(scrollTop <= this.navTop && this.fixed) {
		this.fixed = false;
		this.root.removeAttr("style").removeClass(this.fixedClass);
	}
};

return StickyNav;

}(jQuery));
