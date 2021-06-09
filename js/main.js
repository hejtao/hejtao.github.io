$(document).ready(function() {

  $('body').removeClass('no-js');

  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 100000) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '465px', 'width': '26%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname.substring(0, 6) == "/page/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
      });
      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

    } else {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    }
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
        $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
      });

      $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
    }
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  $("article.post-container--single a[href^=http]").attr("target", "_blank");
  $("article.post-container--single a[href^=mailto]").attr("target", "_blank");



  $(function(){

		$('.img-click').click(function(){
            document.getElementById("img-content").src=$(this).attr("data");
			$('.img-background').fadeIn(200);
			$('.img-border').fadeIn(400);

		});
		$('.img-background').click(function(){
			$('.img-background').fadeOut(200);
			$('.img-border').fadeOut(200);
		});

	});
});


function createImgEventFullScreen() {
  var imgs = $(".post").find("img");
  console.log(imgs);
  for(var i = 0;i < imgs.length;i++) {
    // $(imgs[i]).click(createCover(imgs[i]));
    imgs[i].onclick= function(e) {
      var src = e.srcElement.currentSrc;
      createCover(src)
    }
  }
  function createCover (src) {
    console.log(src);
    var cover = $("<div id='fullScreenCover' class='zhao-cover-img-container'><img class='zhao-cover-img' src='"+src+"'/></div>");
    $("#fullScreenCover").remove();
    $("body").append(cover);
    $("body").addClass("zhao-no-scroll");
    $("#fullScreenCover").click(function(){
      $("#fullScreenCover").remove();
      $("body").removeClass("zhao-no-scroll");
    })
  }
}

setTimeout(function(){
  createImgEventFullScreen();
},1000)
