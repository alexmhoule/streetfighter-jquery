$(document).ready(function() {

	var isHovered = false,
	 hasPlayed = false;

	$('.ryu').mouseenter(function() {
		isHovered = true;
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		isHovered = false;
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		console.log('mousedown');
		// play hadouken sound
		playHadouken();
		//show hadouken and animate it to the right of the screen
		$('.ryu-ready').hide();
		$('ryu-still').hide();
		$('ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '625px');
			}
		);
	})
	.mouseup(function() {
		console.log('mouseup');
		//ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('ryu-cool').hide();
		$('ryu-still').hide();
		$('.ryu-ready').show();
	})



function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playCool() {
	$('#cool')[0].volume = 0.5;
	$('#cool')[0].load();
	$('#cool')[0].play();
}

$(document).keydown(function (event) {
	if (event.keyCode == 88) {

		if(hasPlayed==false) {
			hasPlayed = true;
			playCool();
		}

		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('ryu-throwing').hide();
		$('hadouken').hide();
      	$('.ryu-cool').show();
	}
}).keyup (function (event) {
	if (event.keyCode == 88) {

		hasPlayed = false;
		$('#cool')[0].pause();
		$('.ryu-cool').hide();
		$('ryu-throwing').hide();
		$('ryu-still').show();
		if(isHovered==true) {
			$('.ryu-ready').show();
			$('.ryu-still').hide();
		} else {
			$('.ryu-still').show();
			$('.ryu-ready').hide();
		}
	}
});

})