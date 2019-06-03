$(document).ready(function(){
	$("a").attr("href", "http://www.codefactory.wien");
	$("code").css("color", "red");
	$("ol > li").css("background-color", "#2a7b90");
	$("textarea").val("Express your opinion");
	$("img").attr("src", "https://codefactory.wien/wp-content/uploads/2019/05/Logo-new.png");
	$("blockquote").css({"background-color": "orange", "font-style": "italic"});
	$("#logo").css("color", "black");
	$(".gray").css("color", "white");
	$(".date").remove();
	var newLis = $('<li><a href="#newTemplate">New Template</a></li>' +
		'<li><a href="#orderTemplate">Order Template</a></li>' +
		'<li><a href="#contactUs">Contact Us</a></li>');
	$(".sidemenu").append(newLis);
	$("#sidebar > p:first-of-type").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
});