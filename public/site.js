var main = function(){
  $(".fa-times").click(function() {
    $(".sidenav").removeClass("show-nav");
  });
    
  $(".toggle-menu").click(function() {
    $(".sidenav").addClass("show-nav");
  });
  
  $("#first-icon").hover(function() {
    var options = {}; //no options
  $("this").effect("bounce", options, "normal", callback);
 });

};

$(document).ready(main);