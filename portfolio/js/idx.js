$("document").ready(function() {
  handleTyping();
});
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

