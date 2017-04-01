/**
 * Created by Onofrio Falco on 17/03/2017.
 */
$(document).ready(function() {
	$('#register').click(function(){
		event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});
});