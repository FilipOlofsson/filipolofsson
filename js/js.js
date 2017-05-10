$(document).ready(function(){
  $("a").click(function(e) {
    e.preventDefault();
    $($.attr(this, 'href')).addClass('active');
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
});
$(document).ready(function() {
  	$("a").click(function(e) {
		setTimeout(function() {
    		$(".active").removeClass('active');
		}, 2000);
  	});
});
$(document).keydown(function (e) {
  switch(e.which) 
  {
       case 38:
           	e.preventDefault();
    		$('html, body').animate({ scrollTop: 0}, 1000);
           break;
       case 40:
           $('html, body').animate({ scrollTop: $(window).height()}, 1000);
           break;
   }

});
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
      $('html, body').stop();
      $('html, body').animate({ scrollTop: 0}, 1000);
      
    }
    else {
      $('html, body').stop();
      $('html, body').animate({ scrollTop: $(window).height()}, 1000);
      
    }
});
