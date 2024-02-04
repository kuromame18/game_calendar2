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

// explain
document.addEventListener('DOMContentLoaded', function () {
  var animatedElement = document.querySelector('#explain');
  window.addEventListener('scroll', function() {
    if (isElementInViewport(animatedElement)) {
      animatedElement.classList.add('active');
    };
  });
});

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};