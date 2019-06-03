$(document).ready(function(){
	$("a").attr("href", "http://www.codefactory.wien");
	$("code").css("color", "red");
	$("ol > li").css("background-color", "#2a7b90");
	$("input").val("Express your opinion");
	$("img").attr("src", "https://codefactory.wien/wp-content/uploads/2019/05/Logo-new.png")
	$("blockquote").css({"background-color": "orange", "font-style": "italic"});
	$("#logo").css("color", "black");
	$(".gray").css("color", "white");
	$(".date").remove();
	var newLi = $('<li> <a href="http://www.codefactory.wien">New Templates</a></li>' +
		'<li> <a href="http://www.codefactory.wien">Order Template</a></li>' +
		'<li> <a href="http://www.codefactory.wien">Contact Us</a></li>');
	$(".sidemenu").append(newLi);
	$("#sidebar > p:first-of-type").text( "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");	
});
