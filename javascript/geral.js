var $ = jQuery.noConflict();
$(document).ready(function(){
  $(".menu").click(function() {
    $(".menu ul").toggleClass("open");
  });
});