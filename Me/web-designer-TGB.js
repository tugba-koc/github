$(".navbar-toggler").click(function () {
  $("article.giris").toggleClass("move");
});

$("article.giris").mouseout(function () {
  $("h1.description").css("display", "block");
});

$("button.yorum1").click(function () {
  $("form.yorum1").remove();
});

$("button.yorum2").click(function () {
  $("form.yorum2").remove();
});

$("button.yorum3").click(function () {
  $("form.yorum3").remove();
});

$("button.yorum4").click(function () {
  $("form.yorum4").remove();
});

$("button.yorum5").click(function () {
  $("form.yorum5").remove();
});

$("button.yorum6").click(function () {
  $("form.yorum6").remove();
});
