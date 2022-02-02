$(document).ready(function() {
  $('.slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
   
    swipe: false,
    responsive: [
      {
        breakpoint: 779,
        settings: {
          swipe: true,
          dots: true,
          slidesToShow: 1

        }
      }
    ]
  });


  $('.slider_min').slick({
    swipe: false,
    infinite: true,
    slidesToShow: 1,
	  arrows: true,
  });
  $('.slider_doc').slick({
    slidesToShow: 2,
    swipe: false,
    infinite: true,
    arrows: false,
    
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: true,
          swipe: true,
        }
      }
    ]
  });
});

// popup =============================>
let body = document.querySelector('body');
let popup = document.getElementById('popup'),
  popupToggle = document.getElementById('btnOrder'),
  popupClose = document.querySelector('.close');
  popupScroll = document.querySelector('btnOrder');
  popupToggle.onclick = function() {
  popup.style.display = 'block';
  $('body').toggleClass('lock');
};
  popupClose.onclick = function() {
  popup.style.display = 'none';
  $('body').toggleClass('onlock');
};
// menu burger ===================>
$(document).ready(function() {
  $('.burger').click(function(event) {
    $('.burger,.lines,.menu_burger').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.nav_link_burger').click(function(event) {
    $('.burger,.lines,.menu_burger').toggleClass('active');
    $('body').toggleClass('onlock');
  });
});
$(document).ready(function() {
	$("#tel").mask("+7(999) 999-99-99");
})
















