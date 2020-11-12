$(document).ready(function(){
	$(window).on("scroll", function stickyNav(){
		const windowTop = $(this).scrollTop(),
					headerEl = $("header"),
					stickyClass = "sticky";
		
		(windowTop > 20) ? headerEl.addClass(stickyClass) : headerEl.removeClass(stickyClass);
	});

});
