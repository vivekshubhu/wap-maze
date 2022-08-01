$(document).ready(function () {
  let foul = false;
  let inPlay = false;

  $("#start").click(function () {
    $(".boundary").removeClass("youlose");
    foul = false;
    inPlay = true;
    $("#status").text('Click the "S" to begin.');
  });

  $(".boundary").mouseover(function () {
    if (inPlay) {
      $(".boundary").addClass("youlose");
      foul = true;
    }
  });

  $("#end").mouseover(function () {
    if (inPlay) {
      $("#status").text(foul ? "You loose" : "You win!");
      inPlay = false;
    }
  });

  $("#maze").mouseleave(function () {
    if (inPlay) {
      $(".boundary").addClass("youlose");
    }
  });
});
