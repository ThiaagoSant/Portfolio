$(document).ready(function(){
	
	$(window).on("scroll", function stickyNav(){
		const windowTop = $(this).scrollTop(),
					headerEl = $("header"),
					stickyClass = "sticky";
		
		(windowTop > 20) ? headerEl.addClass(stickyClass) : headerEl.removeClass(stickyClass);
	});
	
	// responsive navbar
	$(".menu-btn i").on("click", function menuActive(){
		const menu = $(".navbar ul"),
					classActive = "active",
					classClose = "fa-times";
		
		menu.toggleClass(classActive);
		$(this).toggleClass(classClose);
	});

});
