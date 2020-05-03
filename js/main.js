$(function(){
  console.log("OK?");

  $(".hamburgerMenu").click(function(){
    var hideMenu = $(".hideMenu");
    var displayNone = "d-none";
    if(hideMenu.hasClass(displayNone)){
      hideMenu.removeClass(displayNone);
    } else {
      hideMenu.addClass(displayNone);
    }
  })
  
})