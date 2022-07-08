$(document).ready(function(){ 

    $(window).scroll(function() {
        if($(this).scrollTop() > $(".footer_con").offset().top - ($("#leftmenu").height() + 225)){ // 80: .fixmenu top
            $("#leftmenu").removeClass("fixmenu2");
           
        }
        else if($(this).scrollTop() > 0) {
          
            $("#leftmenu").addClass("fixmenu2");
        }
        else {
            $("#leftmenu").removeClass("fixmenu2");
        }
    });
    
});