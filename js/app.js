
$(document).ready(function(){
	$('#start').click(start_running);
});

var car = $('#car');
var audio = $('#audio').get(0);
var start_running = function(){
	car_move_1();
	audio.play();
}
function car_move_1(){
	car.animate({'left':'750px'}, 2000, car_move_2);
}
var car_move_2 = function(){
	car.addClass('rotate90');
	car.animate({'top':'+=370px'},1000,car_move_3);
}

var car_move_3 = function(){
	car.removeClass('rotate90');
	car.addClass('flip180');
	car.animate({'left':'-=555px'},1000,car_move_4);
}

var car_move_4 = function(){
	car.removeClass('flip180');
	car.addClass('rotate90');
	car.animate({'top':'+=100px'},500,car_move_5);
}

var car_move_5 = function(){
	car.removeClass('rotate90');
	car.animate({'left':'+=260px'},1250,function(){
		audio.pause();
	});
}










	