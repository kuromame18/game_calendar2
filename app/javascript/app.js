// sp-menu
$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

// topページ
$(function () {
  $('.top-start-btn').on('click',function(event){
    var target = $(this).attr('href');
    $('body, html').animate({
      scrollTop: $(target).offset().top
    },600);
    event.preventDefault();
  });
});