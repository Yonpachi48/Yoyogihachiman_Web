$(window).on('load scroll', function() {
  fix_element();
});
   
function fix_element() {
  // 固定配置に使用する要素
  var $fixWrapper = $('.js-fix-wrapper');
  var $fix = $('.js-fix');
  var $fixContents = $('#wedding-shichigosan');
 
  // 要素がある場合のみ処理
  if($fixWrapper.length && $fix.length) {
    var fixTop = $fixWrapper.offset().top;
    var winScroll = $(window).scrollTop();
    // 対象位置を通過していない場合
    if(winScroll < fixTop) {
      $fix.addClass('is-fixed');
      $fixContents.removeClass('is-fixed');
    } else {
      $fix.removeClass('is-fixed');
      $fixContents.addClass('is-fixed');
    }
  }
}

$(function () {
  var fadeIn = $('.js-animation');
  $(window).on('scroll', function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});