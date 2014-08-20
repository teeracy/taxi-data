$(function() {
	$.getJSON("intersections-taxi-data.json", function(json) {
	    console.log(json); // this will show the info it in firebug console
	});
});
console.log("Hi")