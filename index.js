// jQuery() -> $

//wait for the jquerry loading
$(document).ready(function() {
  $("h1").css("color","red");
});

$("h1").addClass("big-text");

$(document).keypress(function(event) {
  $("h1").text(event.key);
});





// Use minify for hosting!!!!!!!
