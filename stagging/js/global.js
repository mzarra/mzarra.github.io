jQuery(function($){
	
	//put all jquery in here
	if( $('.iconSlideshow').length > 0 )
	{
		$( '.iconSlideshow' ).cycle({
			"slideExpr": ".iconSlide",
			"fx": "scrollLeft",
			"speed": 1000,
			"timeout": 7000
		});
	}
	
});