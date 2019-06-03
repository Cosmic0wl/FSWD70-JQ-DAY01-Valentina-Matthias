$(document).ready(function(){
	for (var i = 0; i < grocery.length; i++) {
		var obj = grocery[i];
		var test = $("<div class = 'test'"+i+">" + "<img src='" + obj.img + "'>" + "<p>" + obj.name + "<p/>" + "<p>" + obj.price + "</p>" + "<p>" + obj.status + "</p>" + "<p>" + '<input type="button" id="Btn" class="btn" value="Buy" />' + "</p> </div>");
		$(".item").append(test);
		
	}

	$(".btn").click(function() {
		$(".item").css("background-color", "red");
		
	});

	
});


