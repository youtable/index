$(document).ready(function(){ 

    $(window).scroll(function() {
        if($(this).scrollTop() > $(".footer_con").offset().top - ($("#leftmenu").height() + 10)){ // 80: .fixmenu top
            $("#leftmenu").hide();
           
        }
        else if($(this).scrollTop() > 0) {
            $("#leftmenu").show();
            $("#leftmenu").addClass("fixmenu2");
        }
        else {
            $("#leftmenu").show();
            $("#leftmenu").removeClass("fixmenu2");
        }
    });
    
});