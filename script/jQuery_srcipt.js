$(document).ready(function(){
	$('.lvl-info').hide();

	$('.lvl').on('mouseover', function(){
		$(this).removeClass("color_anim_2")
		$(this).addClass("color_anim_1");
		$(this).children('.lvl-info').slideDown();
	});

	$('.lvl').on('mouseleave', function(){

		$(this).removeClass("color_anim_1");
		$(this).filter("[name=1]").addClass("color_anim_2");
		$(this).children('.lvl-info').slideUp();
		//$(this).removeClass("color_anim_2");
	});
	$('.lvl').on('click', function(){
		var name = $(this).attr('name');
		var href = window.location-"/quiz_start.html";
		window.location = "http://localhost/repo/elephantsCanFly/game.php?lvl="+name;
		return false;
	});

});