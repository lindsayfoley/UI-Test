var favourtiesSelector = function() {
	$('.profileBottomLinks img').click(function(e) {				
		$(this).toggleClass('redHeart')
		
		e.stopPropagation();
		
	});
}

var profileSelector = function() {
	$('.profileDetails').click(function() {				
		$(this).toggleClass('selectedProfile')
	});
}

var neighbourhoodMenu = function() {
	$('aside ul:first-child').click(function() {
		$('aside ul:first-child li').css('padding-bottom', '16px');			 	
		$('#neighbourhoodSubNav').toggle();	 
	});
}

$(document).ready(function() {
	favourtiesSelector();
	profileSelector();
	neighbourhoodMenu();
});