var AutoUp;
var src;

$('head').append('<style></style>');
$('.player_header').append('<span class="" id="autoup">Auto Up</span>');
$('.player_header').append('<span class="" id="snooze">Snooze</span>');
$('.player_header').append('<span class="" id="grab">Grab</span>');

function autoupON() {
	$('.dubup').trigger('click');
	$('#autoup').addClass("active");
	AutoUp = setInterval(function() { $('.dubup').trigger('click'); }, 10000);
	$(this).one('click', autoupOFF);
}
function autoupOFF() {
	$('.dubdown').trigger('click'); 
	$('#autoup').removeClass("active");
	clearInterval(AutoUp);
	$(this).one('click', autoupON);
}
$('#autoup').one('click', autoupON);

function snoozeON() {
	$('.mute').click();
	$('.hideVideo-el').click();
	$('#snooze').addClass("active");
	$(this).one('click', snoozeOFF);
}
function snoozeOFF() {
	$('.mute').click();
	$('.hideVideo-el').click();
	$('#snooze').removeClass("active");
	$(this).one('click', snoozeON);
}
$('#snooze').one('click', snoozeON);

$('#grab').click(function() {
	
	function getId(url) {
		var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		var match = url.match(regExp);
		
		if (match && match[2].length == 11) {
			return match[2];
		} else {
			return 'error';
		}
	}
	
	src = $('iframe').attr('src');
	
	setInterval(function() { 
		src = $('iframe').attr('src');
	}, 10000);
	
	window.open('http://youtubeinmp3.com/fetch/?video=http://www.youtube.com/watch?v=' + getId(src), '_blank');
});
