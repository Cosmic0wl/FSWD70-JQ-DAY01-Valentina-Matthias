$("form").submit(function(e) {

	e.preventDefault();

});

$(document).ready(function() {
	
	var newDivs = $('<div class="box">New Div</div>' +
		'<div class="box">New Div</div>' +
		'<div class="box">New Div</div>' +
		'<div class="box">New Div</div>' +
		'<div class="box">New Div</div>');
	$("article").append(newDivs);
	$("#msg").val("Search for...");
	// $("form").remove();
	$("a").attr("href", "http://www.codefactory.wien");
});
