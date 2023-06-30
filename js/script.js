$(document).ready(function(){
    $(".base1, .base2, .base3, .base4, .base5").hide();
    $(window).load(function(){
        /*BG1 베이지색*/
        $(".base1").delay(900).fadeIn(800);
        /*bg2 그린 왼쪽*/
        $(".base2").delay(1200).fadeIn(1000);
        /*bg3 그린 오른쪽*/
        $(".base3").delay(1500).fadeIn(1000);
        /*bg4 가운데 라이트 그린*/
        $(".base4").delay(1800).fadeIn(1000);
        /*bg5 가운데 etc*/
        $(".base5").delay(1800).fadeIn(1200);
    });

    /*나무 나타나기*/
    $(".tree1,.tree2,.tree3,.tree4,.tree5,.tree6").hide();
    $(window).load(function(){
        /*tree1 왼쪽 위*/ 
        $(".tree1").delay(3000).slideDown(1800);
        /*tree2 왼쪽 아래*/ 
        $(".tree2").delay(2000).slideDown(2000);
        /*tree3 오른쪽 위*/ 
        $(".tree3").delay(3000).slideDown(1800);
        /*tree4 오른쪽 아래*/ 
        $(".tree4").delay(1500).slideDown(2000);
        /*tree5 왼쪽 벚꽃*/ 
        $(".tree5").delay(3000).slideDown(2000);
        /*tree6 가운데 벚꽃*/
        $(".tree6").delay(3000).slideDown(2500);
    });
    
    /*그 외 나타나기*/
    $(".tree_all,.logo").hide();
    $(window).load(function(){
        $(".tree_all").delay(2000).fadeIn(4000);
        $(".logo").delay(4000).fadeIn(2000);
    });

    /*테마별 위치 나타나기*/
    $(".circus,.snowman,.zerosum,.groundzero,.train,.sea,.lake").hide();
    $(window).load(function(){
        $(".circus").delay(2000).fadeIn(4000);
        $(".snowman").delay(3000).fadeIn(2000);
        $(".zerosum").delay(2000).fadeIn(4000);
        $(".groundzero").delay(3000).fadeIn(2000);
        $(".train").delay(2000).fadeIn(4000);
        $(".sea").delay(3000).fadeIn(2000);
        $(".lake").delay(2000).fadeIn(4000);
    });

});

/*sapce1 효과*/
$(function(){
    $(".p1 img").hide();
    $(".zerosum a").mouseenter(function(){
        $(".basic img").hide();
        $(".p1 img").show();
    });
    $(".zerosum a").mouseleave(function(){
        $(".basic img").show();
        $(".p1 img").hide();
    });
});

/*sapce2 효과*/
$(function(){
    $(".p2 img").hide();
    $(".groundzero a").mouseenter(function(){
        $(".basic img").hide();
        $(".p2 img").show();
    });
    $(".groundzero a").mouseleave(function(){
        $(".basic img").show();
        $(".p2 img").hide();
    });
});

/*circus 효과*/
$(function(){
    $(".p3 img").hide();
    $(".circus a").mouseenter(function(){
        $(".basic img").hide();
        $(".p3 img").show();
    });
    $(".circus a").mouseleave(function(){
        $(".basic img").show();
        $(".p3 img").hide();
    });
});

/*sea 효과*/
$(function(){
    $(".p4 img").hide();
    $(".sea a").mouseenter(function(){
        $(".basic img").hide();
        $(".p4 img").show();
    });
    $(".sea a").mouseleave(function(){
        $(".basic img").show();
        $(".p4 img").hide();
    });
});

/*snowman 효과*/
$(function(){
    $(".p5 img").hide();
    $(".snowman a").mouseenter(function(){
        $(".basic img").hide();
        $(".p5 img").show();
    });
    $(".snowman a").mouseleave(function(){
        $(".basic img").show();
        $(".p5 img").hide();
    });
});

/*train 효과*/
$(function(){
    $(".p6 img").hide();
    $(".train a").mouseenter(function(){
        $(".basic img").hide();
        $(".p6 img").show();
    });
    $(".train a").mouseleave(function(){
        $(".basic img").show();
        $(".p6 img").hide();
    });
});