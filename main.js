//ham menu
$(".ham").click(function () {
  $(".ham").toggleClass("rotate");
  $("#items").toggleClass("display");
});
//trimming
$("#trimButton").click(function () {
  $("#trim4before").fadeOut(850, function () {
    $("#trim4").css("height", "300px");
  });
  $("#trim3before").fadeOut(750, function () {
    $("#trim3").css("height", "300px");
  });
  $("#trim2before").fadeOut(650, function () {
    $("#trim2").css("height", "300px");
  });
  $("#trim1before").fadeOut(500, function () {
    $("#trim1").css("height", "300px");
  });
});
$("#resetButton").click(function () {
  $("#trimZone").load(location.href + " #trimZone");
});
// scroll effect on header

const body = document.body;
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});
