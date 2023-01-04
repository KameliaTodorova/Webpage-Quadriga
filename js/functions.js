$( document ).ready(function() {
   // $('.owl-carousel').owlCarousel({
	//	loop:false,
	//	margin:0,
	//	nav:false,
	//	items:1,
	//	dots:true
	//});

$('#menu-toggle').click(function(e){
		console.log(2);
		e.preventDefault();	
		var mWidth = $('#main-menu').width();		
		if( $('html').hasClass('menu-opened') ){				
			$('#main-menu').animate({right: -mWidth},function(){
				$('html').removeClass('menu-opened');
			});
		}else{
			$('html').addClass('menu-opened');
			$('#main-menu').animate({right: 0},function(){
				//
			}); 
		}		
	});
});