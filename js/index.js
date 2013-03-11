$(document).ready(function(){
		
	// initiate page scroller plugin
	$('body').pageScroller({
		navigation: '#nav',
		scrollOffset: -100 //#main margin
	});

	$('#logo').click(function() {
		$('#start').children()[0].click();
	});
					
});