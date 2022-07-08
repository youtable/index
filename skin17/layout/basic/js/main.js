       
      $(document).ready(function(){     
                $(window).scroll(function(){
                    $('.lazy').each(function(){
                        var offsetTopPosition = $(this).offset().top - $(window).scrollTop();
                        if (offsetTopPosition < 900) {
                            $(this).addClass('on');
                        }
                        
                    });
                   
               }); 
          
               $(window).scroll(function(){
                    $('.lazy2').each(function(){
                        var offsetTopPosition = $(this).offset().top - $(window).scrollTop();
                        if (offsetTopPosition < 1200) {
                            $(this).addClass('on');
                        }
                        
                    });
                   
               }); 
         });