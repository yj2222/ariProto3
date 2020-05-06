$(function(){

  $(".hamburgerMenu").click(function(){
    var hideMenu = $(".hideMenu");
    var displayNone = "d-none";
    if(hideMenu.hasClass(displayNone)){
      hideMenu.removeClass(displayNone);
    } else {
      hideMenu.addClass(displayNone);
    }
  })
  
  $("#fonmConfirmBtn").click(function(e){
    var contactForm__name = $("#contactForm__name").val()
    var contactForm__email = $("#contactForm__email").val()
    var contactForm__message = $("[name=contactForm__message]").val().replace(/\r|\n|\r\n/g, '<br>')
    $(".formConfirmModal").removeClass("d-none");
    $("#formConfirm__name").text(contactForm__name);
    $("#formConfirm__email").text(contactForm__email);
    $("#formConfirm__message").html (contactForm__message);
  })

  $(".formConfirmModal, #formConfirmModal__close").click(function(){
    $(this).addClass("d-none");
  })

})