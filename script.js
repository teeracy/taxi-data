var map;

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.732751, -73.922195)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(function() {
	$.getJSON("intersections-taxi-data.json", function(json) {
	    console.log(json); 
	    for (i = 0; i < (json.length); i++) {
	    	var chances = (json[i].passEmpties) / (json[i].passEmpties + json[i].passFulls)
	    	var circleOptions = {
	    		strokeColor: '#FF0000',
		      	strokeOpacity: 0.8,
		      	strokeWeight: 2,
		      	fillColor: '#FF0000',
		      	fillOpacity: 0.35,
		      	map: map,
		      	center: new google.maps.LatLng(json[i].geo.coordinates[1], json[i].geo.coordinates[0]),
		      	radius: chances * 100
	    	}
	    intersectionCircle = new google.maps.Circle(circleOptions);
	    }
	});
});


