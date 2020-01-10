$(document).ready(function () {
    setTimeout(function(){
        $('.sun').fadeIn(500);
    }, 750);
});

$(".topnav li a").click(function(e) {

  var targetHref = $(this).attr('href');

  $("html, body").animate({
    scrollTop: $(targetHref).offset().top
  }, 1000);

  e.preventDefault();
});

var i = 0;
var txt = "I'm Perry."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

$(document).ready(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name-intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

});
