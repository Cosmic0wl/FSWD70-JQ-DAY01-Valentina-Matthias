$(document).ready(function() {
    for (var i = 0; i < products.length; i++) {
        var obj = products[i];
        //console.log(obj.name);
        var item = $('<div class="item">' + '<img src="' + obj.img + '">' + '<p>' + obj.name + '</p>' + '<p>' + obj.price + '$</p>' + '<p>' + obj.status + '</p></div>');
        $(".row").append(item);
    }
});