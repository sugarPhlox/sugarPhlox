(function(){
  $(window).scroll(function() {     
    if($(this).scrollTop() > $(window).height()) { 
        $('.navbar').addClass('opaque');
    } else {
        $('.navbar').removeClass('opaque');
    }
  });
})();