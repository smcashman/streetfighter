
function playHadouken () {
  	$('#hadouken-sound')[0].volume = 0.5;
  	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}

function playCool () {
	$("#cool-song")[0].volume=0.5;
	$("#cool-song")[0].load();
	$("#cool-song")[0].play();
}

$(document).ready(function(){

$('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
	$('.ryu-ready').show();
    })

	.mouseleave(function() {
	$(".ryu-still").show();
	$(".ryu-ready").hide();

 	})

	.mousedown(function() {
	playHadouken();
	$(".ryu-still, .ryu-ready").hide();
	$(".ryu-throwing").show();
	$(".hadouken").show().animate({"left": "1020px" }, 500, function( ) {
	$(this).hide();
	$(this).css("left", "618px");
	});
	})

	.mouseup(function() {
	$(".ryu-throwing").hide();
	$(".hadouken").hide();
	$(".ryu-ready").show();
	});

	$(document).keydown(function(e) {
  	if (e.which==88) {
  		playCool();
  		$(".ryu-still, .ryu-ready").hide();
  		$(".ryu-cool").show();
  	}
  });

	$(document).keyup(function() {
		$(".ryu-ready, .ryu-cool").hide();
		$(".ryu-still").show();
	});
  
	
  	


});