$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});
$(document).ready(function(){
	//$("form").remove();
	var newDiv = $('<div class="box">New Div</div>' + 
		'<div class="box">New Div</div>' + 
		'<div class="box">New Div</div>' + 
		'<div class="box">New Div</div>' + 
		'<div class="box">New Div</div>');
	$("article").append(newDiv);
	$("input").val("Search for...")
	$("a").attr("href", "http://www.codefactory.wien")
});