$(document).ready(function() {

	$('#submit').on('click', function(event){


		// This prevents the form from trying to submit itself and reseting the page.
		event.preventDefault();

var title = $("#title").val().trim();	
var body = $("#body").val().trim();	

$('#Post').append('<div>' + title + '</div>'); 
$('#Post').append('<div>' + body + '</div>'); 




	});






});