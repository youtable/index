// 회원&비회원 토글
$('.tab').each(function(){
    var selected = $(this).find('> ul > li.selected > a');
});
 $('#Nologin_wrap').hide();
$('body').delegate('.eTab a', 'click', function(e){
   var _target = $(this).attr('href');
    if (_target == '#member') {
        $('#login-wrap').show();
        $('#Nologin_wrap').hide();
    } else { console.log("BBB");
        $('#Nologin_wrap').show();
        $('#login-wrap').hide();    
    }
    e.preventDefault();
});