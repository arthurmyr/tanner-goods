$(document).ready(function(){
  $("li").hover(
    function() {
      $(this).prepend('<div class="hr"></div>');
      $("li .hr").hide().fadeIn();
      $(this).append('<div class="round"></div>');
      $("li .round").hide().fadeIn();
    }, 
    function() {
      $("li .hr").fadeOut(function(){
        $(this).remove();
      });
      $("li .round").fadeOut(function(){
        $(this).remove();
      });
    });

  $("#fixed-nav span a").click(function(){
    $("#fixed-nav span a").removeAttr("class");
    $(this).attr("class", "active-anchor");
  });
  
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });
});