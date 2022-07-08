
(function($) { 
    
    $(".gnb_con").hide();
	         $(".menu_list > li").mouseenter(function(){
			  	$(".gnb_con").stop().slideDown(400);		 
                  
		     });
                 $(".gnb_con").on("focusin mouseenter", function(){
                     $(".gnb_con").stop().slideDown(400);		 
                  

			  }).on("focusout mouseleave", function(){
                     $(".gnb_con").stop().slideUp(400);	

   
			  }); 



}(jQuery1_11_2));


var nav = $('#top');

var t_logo = $('#logo');

$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        nav.addClass("show");
      
    } else {
        nav.removeClass("show");
        
   
    }
    
    if ($(this).scrollTop() > 200) {
     
        t_logo.addClass("t_logo");
    } else {
       
        t_logo.removeClass("t_logo");
   
    }
});



$("#ham_btn, .ham_on").click(function(){
    $(".navi_con").addClass("show");
});
$(".close_btn").click(function(){
    $(".navi_con").removeClass("show");
});