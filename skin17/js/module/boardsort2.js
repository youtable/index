(function(i,s,g,a,m,board_no){
      if(s.getElementById(g)){return};
      m=new RegExp("[\\?&]board_no=([^&#]*)").exec(location.search),board_no=m?decodeURIComponent(m[1].replace(/\+/g, " ")):'';
      if(board_no == "1"){
        document.write("<style>.newsMid{display:inline-block;}</style>");      
      }     
    /*
      else if (board_no == "1"){
        document.write("<style>#aside .main-cate > ul > li.cate05 > a.on {color:#fff;}</style>");          
      }
      */
})(window,document,'script');   

$(function() {
    var nav = document.getElementById("nav"),
        anchor = nav.getElementsByTagName("a"),
        current = window.location;

    console.log("anchor = ",anchor,"current = ",current);

    for (var i = 0; i < anchor.length; i++) {
    if(anchor[i].href == current) {
        anchor[i].className = "active";
    }
}
});