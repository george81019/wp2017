$(document).ready(function(){
    $(".menuitem1").click(function(){
        $("#Am").fadeToggle(1000);
	$("#Fav").hide(1000);
	$("#Cm").hide(1000);
	$("#MI").hide(1000);
    });
});

$(document).ready(function(){
    $(".menuitem2").click(function(){
        $("#Am").hide(1000);
	$("#Fav").fadeToggle(1000);
	$("#Cm").hide(1000);
	$("#MI").hide(1000);
    });
});

$(document).ready(function(){
    $(".menuitem3").click(function(){
     	$("#Am").hide(1000);
	$("#Fav").hide(1000);
	$("#Cm").fadeToggle(1000);
	$("#MI").hide(1000);
    });
});

$(document).ready(function(){
    $(".menuitem4").click(function(){
	$("#Am").hide(1000);
	$("#Fav").hide(1000);
	$("#Cm").hide(1000);
	$("#MI").fadeToggle(1000);
    });
});
