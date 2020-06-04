$(document).ready(function(){

  $("form#choose").submit(function(event) {
    event.preventDefault();
    
    const animal = $("#animalchoice").val()

    if (animal === "Lockness Monster") {
      $(".animal1").show();
      $(".animal2").hide();
      $(".animal3").hide();
    }
    else if (animal === "Big Foot") {
      $(".animal2").show();
      $(".animal1").hide();
      $(".animal3").hide();
    }
    else if (animal === "Chupacabra") {
      $(".animal3").show();
      $(".animal1").hide();
      $(".animal2").hide();
    }

  });

});