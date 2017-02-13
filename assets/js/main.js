/*
	Spatial by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.

			// Navigation Panel Toggle.
				// $('<a href="#navPanel" class="navPanelToggle"></a>')
				// 	.appendTo($body);

			// Navigation Panel.
				// $(
				// 	'<div id="navPanel">' +
				// 		$('#nav').html() +
				// 		'<a href="#navPanel" class="close"></a>' +
				// 	'</div>'
				// )
				// 	.appendTo($body)
				// 	.panel({
				// 		delay: 500,
				// 		hideOnClick: true,
				// 		hideOnSwipe: true,
				// 		resetScroll: true,
				// 		resetForms: true,
				// 		side: 'right'
				// 	});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				// if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				// 	$('#navPanel')
				// 		.css('transition', 'none');

	});


	//Self-defined part
	$(function() {
		console.log("Bird's Portfolio");

		$(".gallery img").click(function(){

			$(".iframe img").prop("src", $(this).prop("src"));
			$(".iframe").fadeIn();
		});

		$(".iframe").click(function(){
			$(".iframe").fadeOut();
		})


		$(".segment").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#" + $(this).data("id")).offset().top},
		        'slow');
		});

		var opening = false;
		$(".area.menu").mouseover(function(){
			if (!opening) {

				opening = true;
				var openingCount = 0, openingLimit = 2;

				$(".segments.menu").animate({
					opacity: 1
				}, openingCounterHelper);
				$(".icon.menu").fadeOut(openingCounterHelper);

				function openingCounterHelper() {

					console.log("opening:", openingCount);
					openingCount ++;
					if (openingCount >= openingLimit) {
						opening = false;
					}
				}
			}
		})


		// mouseleave
		var closing = false;
		$(".area.menu").mouseleave(function(){

			if (!closing){

				closing = true;
				var closingCount = 0, closingLimit = 2;

				$(".icon.menu").fadeIn(closingCounterHelper);
				$(".segments.menu").animate({
					opacity: 0
				}, closingCounterHelper);

				function closingCounterHelper() {

					console.log("closing:", closingCount);
					closingCount ++;
					if (closingCount >= closingLimit) {
						closing = false;
					}
				}
			}
		})
	});


})(jQuery);