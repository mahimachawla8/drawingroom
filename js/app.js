$(function () {

  var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight() - 50;

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });


  nav.find('a').on('click', function () {
    var $el = $(this)
    , id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 1000);

    return false;
  });


  $(window).scroll(function(){
    var pos1 = $("body").scrollTop();
    console.log(pos1);

if(pos1>600) {
  $("nav").addClass("short")
} else {
  $("nav").removeClass("short")
}

});



$(document).ready(function(){
  $('.center').slick({
    centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        string: $(".your-class"),
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        string: $(".your-class"),
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
});

$(document).ready(function(){
 $('.faded').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
});

$(document).click(function(){
  if($("#mce-EMAIL").hasClass("mce_inline_error")) {
    console.log("it's working");
    // $("#mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error").remove();
    // $("#mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error").empty();
    // $("#mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error").html("Please enter a valid email address.");
    $(".mc-field-group").html("<input type="email" placeholder="Email" value="" name="EMAIL" class="required email mce_inline_error" id="mce-EMAIL" aria-required="true" aria-invalid="true"><div for="mce-EMAIL" class="mce_inline_error">Please enter a valid email address.</div></div>");
  } else {
    console.log("it continues to work");
  }
})




});