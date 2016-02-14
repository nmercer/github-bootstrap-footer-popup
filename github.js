$(function(){
  var animating = true;
  var position = 'down';
  var hide_image = "github_down.gif";
  var show_image = "github_up.gif"
  $('.github').attr('src', hide_image);

  // Start slow popup animation onload
  $(".github").animate({
    opacity: 1.0,
    top: "-=15",
  }, 2500, function() {
    animating = false;
  });

  // Brings github guy up and changes image
  function show() {
    animating = true;
    $(".github").animate({
      opacity: 1.0,
      top: "-=50",
    }, 150, function() {
      $('.github').attr('src', show_image);
      animating = false;
      position = 'up';
      if(!$('.github').is(":hover")) {
        hide();
      }
    });
  }

  // Brings github guy back to resting position
  function hide() {
    animating = true;
    $('.github').attr('src', hide_image);
    $(".github").animate({
      opacity: 1.0,
      top: "+=50",
    }, 150, function() {
      animating = false;
      position = 'down';
    });
  }

  $( ".github" ).mouseover(function() {
    if(!animating && position == 'down') {
      show();
    }
  });

  $( ".github" ).mouseout(function() {
    if(!animating && position == 'up') {
      hide();
    }
  });
});
