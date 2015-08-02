$(function(){

	// Initialize Smooth Scroll
	$('a').smoothScroll({
		speed: 800
	});

	// Hide menu item content on load
	$('.toggled').hide();

	// When .title-btn is clicked
	$('.title-btn').on('click', function(){
	
		// Change title bar colour
		$(this).toggleClass('chosen-btn');

		// Toggle plus and minus symbols
		$(this).children('i').toggleClass("fa-plus, fa-minus");

		// Toggle display of menu item content 
		$(this).next().slideToggle("slow");

	})

	// Initialize jQuery UI Tabs Widget
	$('#tabs').tabs();

	// Initialize anyslider
	$('.slider').anyslider({
	    // Options here
	    showControls: false,
	    interval: 0
	});

	// Dropdown Navigation for Mobile
	$('.nav-bar .fa-bars').on('click', function() {
	  $('.site-navigation').toggleClass('show-me');
	});
	$('.site-navigation a').on('click', function() {
		$('.site-navigation').toggleClass('show-me');
	});
})
