$(document).ready(function () {
  $(".carousel").carousel({
    interval: 5000,
  });

  //Show color option div when click on the gear

  $(".gear-check").click(function () {
    $(".color-option").fadeToggle();
  });

  //Change theme color on click

  let colorLi = $(".color-option ul li");

  colorLi
    .eq(0).css("backgroundColor", "#e41b17").end()
    .eq(1).css("backgroundColor", "#e426d5").end()
    .eq(2).css("backgroundColor", "#009aff").end()
    .eq(3).css("backgroundColor", "#ffd500");

  colorLi.click(function () {
    $(" link[href*='theme'] ").attr('href', $(this).attr('data-value'));
  });

  // Caching the scroll top element

  const scrollButton = $("#scroll-top");

  $(window).scroll(function () {
    ($(this).scrollTop() >= 700) ? scrollButton.show() : scrollButton.hide();
  });

  // Click on button to scroll top

  scrollButton.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

});

// Loading screen

$(window).on("load", function () {

  // Loading elements

  $(".loading-overlay .spinner").fadeOut(100, function () {
    
    // Show the scroll

    $("body").css("overflow", "auto");

    $(this).parent().fadeOut(100, function () {
      $(this).remove();
    });
  });
});
