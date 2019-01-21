$(document).ready(function() {
	
	// Say Hello
	$('#hello').click(function() {
		$(this).next().slideToggle('fast', function () {
		});
	});

	// Highlight
	$('#highlight').click(function() {
		$(this).nextAll('p').toggleClass('yellowHighlight');
	});

	// Clock update
	setInterval('updateClock()', 1000);

	
		// Say Hello
	$('#hello2').click(function() {
		
		$(this).next().slideToggle('fast', function () {
		});
		
		alert('hi')
		
		$.get('http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote',function(data,status){
      alert('hi3')
		});
	 
	   alert('hi2')
		
	});
	
	
});
	
// Clock
function updateClock ( )
{
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  
  $("#clock").html(currentTimeString);
        
}