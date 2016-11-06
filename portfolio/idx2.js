$("document").ready(function() {

  handleSideBarClick();
  handleTyping();
});

function handleSideBarClick() {
  $("#sidebar li a").on("click", function() {
    var href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(href).offset().top
    }, 600);
    $("#sidebar")
      .removeClass("animated slideInLeft")
      .addClass("animated slideOutLeft");
    return false;
  });
}



function handleTyping () {
  $(".element").typed({
    strings: ["I'm a new grad Web Developer, love cook and code."],
    typeSpeed: 50,
    starDelay: 200,
    backDelay: 600,
    loop: false,
    showCursor: false,
    cursorChar: "|"
  });
}

