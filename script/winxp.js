var global;

$(document).ready(function(){
	global = {
		window: $(window),
	}
	windowHeight = global.window.height();
	$("ul.main li").css("height", windowHeight);

});
