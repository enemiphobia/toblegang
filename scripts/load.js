$(function(){
    $("#replace_with_navbar").load("nav.html");
    $("#replace_with_socials").load("socialbuttons.html");
    $("#replace_with_player").load("music.html");
  });

  console.log(window.location.origin.substring(0, window.location.origin.length-5));