$(function(){
     $(window).resize(function(){
          if($(this).width() <= 500){
             $.backstretch("bgSmall.webp", {transitionDuration: 150});
          } else if ($(this).width() <= 1280) {
               $.backstretch("bgSmallMedium.webp", {transitionDuration: 150});
          } else if ($(this).width() <= 2560) {
               $.backstretch("bgMedium.webp", {transitionDuration: 150});
          } else {
               $.backstretch("bg.jpg", {transitionDuration: 150});
          }
      })
      .resize();//trigger resize on page load
});
