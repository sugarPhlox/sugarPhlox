(function(){
  $(window).scroll(function() {     
    if($(this).scrollTop() > ($(window).height() - 60)) { 
        $('.navbar').addClass('opaque');
    } else {
        $('.navbar').removeClass('opaque');
    }
  });
})();