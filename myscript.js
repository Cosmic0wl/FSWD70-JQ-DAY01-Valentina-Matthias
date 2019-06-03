/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
$("*").css("background-color", "yellow");

// all p elements
$("p").css("background-color", "green");

// the p element with an ID of "intro"
$("#intro").css("background-color", "blue");

// all elements with a class of "note"
$(".note").css("background-color", "red");

// all DIV elements with a class of note
$("div.note").css("background-color", "white");

// all p elements in the article element
$("article p").css("background-color", "lightblue");

// the last element in any section which is a p tag
$("p:last-of-type").css("font-size", "25px");

// the first paragraph on the page
$("p:first").css("font-size", "5px");

// all p elements which have a link
$("p a").css("color", "red");

// the second li within nested ul element
$("ul li:eq(2)").css("color", "white");

// every second and third p element
$("p:nth-child(2), p:nth-child(3)").css("color", "white")