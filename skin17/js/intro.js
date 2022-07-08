

$(document).ready(function() {

	cookiedata = document.cookie; 

	if ( cookiedata.indexOf("ncookie=done") < 0 ){ 

		document.getElementById('intro_con').style.display = "block";    //  팝업창 아이디

	} else {

		document.getElementById('intro_con').style.display = "none";    // 팝업창 아이디

	}

});



function setCookie( name, value, expiredays ) { 

	var todayDate = new Date(); 

	todayDate.setDate( todayDate.getDate() + expiredays );

	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"

}



function closeWin() { 

	document.getElementById('intro_con').style.display = "none";    // 팝업창 아이디

}



function todaycloseWin() { 

	setCookie( "ncookie", "done" , 7 );     // 저장될 쿠키명 , 쿠키 value값 , 기간( ex. 1은 하루, 7은 일주일)

	document.getElementById('intro_con').style.display = "none";    // 팝업창 아이디[

}

