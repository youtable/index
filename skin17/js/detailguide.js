$(document).ready(function() {
    
    $( "#detailguide" ).accordion({
      collapsible: true,
      autoHeight: false,
      active:0
    }).show();
 
   
});    
//$(document).scroll(function() {
//    checkOffset();
//});
//function checkOffset() {
//    if($('.fixed_buy ').offset().top + $('.fixed_buy ').height() 
//                                           >= $('.footer').offset().top - 10)
//        $('.fixed_buy ').css({'position':'absolute','bottom':'90px'});
//    if($(document).scrollTop() + window.innerHeight < $('.footer').offset().top)
//        $('.fixed_buy ').css({'position':'fixed','bottom':'20px'}); // restore when you scroll up
//}


//SCROLL
 	 $(function(){
			 
			 $(".cart_btn").click(function(){
				  $(this).find('img').toggle();
				  $(".buy_img").toggleClass("long_btn");
				  
				  $(".buyIcon04, .buyIcon02, .buyIcon03").toggleClass("showing");
				  $(".buyIcon02").css({"transform":"translateY(-10px)"});
				  $(".buyIcon03").css({"transform":"translateY(-61px)"});
				  $(".buyIcon04").css({"transform":"translateY(-103px)"});
				  
				  
			 });
		 
		    $(".cart_close").click(function(){
				  
				$(".buyIcon02, .buyIcon03, .buyIcon04").addClass("state");

				  
			 });
		 
		 
		     $(".cart_con").click(function(){
				  
				$(".buyIcon02, .buyIcon03, .buyIcon04").removeClass("state");

				  
			 });
		 
		 
		 
		 
		
		 
		 
		    
			
		 });