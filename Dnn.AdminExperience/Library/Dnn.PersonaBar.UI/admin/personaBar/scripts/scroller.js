'use strict';
define(['jquery'], function ($) {
	return {		
	    init: function (holder, cards, left, right, initialOffset, scrollOffset, visibleCount) {
	        var idx = 0;
	        holder.css({ 'inset-inline-start': initialOffset });
	        var count = cards.length;
	        if (visibleCount >= count) {
	            right.unbind('click').css('visibility', 'hidden');
	            left.unbind('click').css('visibility', 'hidden');
	            return;
	        }

	        right.unbind('click').bind('click', function (e) {
	            e.preventDefault();
	            if (idx < count - visibleCount) {
	                idx++;
	                holder.animate({ 'inset-inline-start': '-=' + scrollOffset }, 300);
	            }
	        }).css('visibility', 'visible');

	        left.unbind('click').bind('click', function (e) {
	            e.preventDefault();
	            if (idx > 0) {
	                idx--;
	                holder.animate({ 'inset-inline-start': '+=' + scrollOffset }, 300);
	            }
	        }).css('visibility', 'visible');
		}
	};	
});