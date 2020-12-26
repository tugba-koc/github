$("button.navbar-toggler").click(function () {
  $("button.navbar-toggler").addClass("correct");
  $("nav.navbar.navbar-light").addClass("correct");
  $("p").addClass("correct");
  $("p.test").css("display", "none");
  $("a.hello, a.whatwedo, a.work, a.team, a.contact").addClass("white");
});

$("button.btn-close").click(function () {
  $("button.navbar-toggler").removeClass("correct");
  $("nav.navbar.navbar-light").removeClass("correct");
  $("p").removeClass("correct");
  $("body").css({
    "background-image": 'url("white.jpg")',
    "background-repeat": "no-repeat",
    "background-size": "cover",
  });
  $("p.test").css("display", "block");
});

$("button.navbar-toggler").click(function () {
  $("body").css("background-image", 'url("0,0,255.png")');
});

$("a.hello").mouseover(function () {
  if (jQuery(window).width() > 921) {
    $("body").css({
      "background-image": 'url("0,0,255.png")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      transition: "all 0.6s ease",
      "background-position": "center",
    });
  }
});

$("a.whatwedo").mouseover(function () {
  if (jQuery(window).width() > 921) {
    $("body").css({
      "background-image": 'url("whatwedo.jpg")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      transition: "all 0.6s ease",
      "background-position": "center",
    });
  }
});

$("a.whatwedo").mouseout(function () {
  if (jQuery(window).width() > 921) {
    $("body").css({
      "background-image": 'url("0,0,255.png")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      transition: "all 0.6s ease",
      "background-position": "center",
    });
  }
});

$("a.work").mouseover(function () {
  if (jQuery(window).width() > 921) {
    $("body").css({
      "background-image": 'url("work.jpg")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      transition: "all 0.6s ease",
      "background-position": "center",
    });
  }
});

$("a.work").mouseout(function () {
  if (jQuery(window).width() > 921) {
    $("body").css({
      "background-image": 'url("0,0,255.png")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      transition: "all 0.6s ease",
      "background-position": "center",
    });
  }
});

$("a.team").mouseover(function () {
  if (jQuery(window).width() > 921) {
    $("body").css({
      "background-image": 'url("team.jpg")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      transition: "all 0.6s ease",
      "background-position": "center",
    });
  }
});

$("a.team").mouseout(function () {
  if (jQuery(window).width() > 921) {
    $("body").css({
      "background-image": 'url("0,0,255.png")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      transition: "all 0.6s ease",
      "background-position": "center",
    });
  }
});

$("a.contact").mouseover(function () {
  if (jQuery(window).width() > 921) {
    $("body").css({
      "background-image": 'url("contact.jpg")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      transition: "all 0.6s ease",
      "background-position": "center",
    });
  }
});

$("a.contact").mouseout(function () {
  if (jQuery(window).width() > 921) {
    $("body").css({
      "background-image": 'url("0,0,255.png")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      transition: "all 0.6s ease",
      "background-position": "center",
    });
  }
});

$("a.hello, a.whatwedo, a.work, a.team, a.contact").mouseout(function () {
  $("a.hello, a.whatwedo, a.work, a.team, a.contact").addClass("white");
});

$("a.hello").mouseover(function () {
  $("a.whatwedo, a.work, a.team, a.contact").removeClass("white");
  $("a.whatwedo, a.work, a.team, a.contact").addClass("solarize");
});

$("a.whatwedo").mouseover(function () {
  $("a.hello, a.work, a.team, a.contact").removeClass("white");
  $("a.hello, a.work, a.team, a.contact").addClass("solarize");
});

$("a.work").mouseover(function () {
  $("a.hello, a.whatwedo, a.team, a.contact").removeClass("white");
  $("a.hello, a.whatwedo, a.team, a.contact").addClass("solarize");
});

$("a.team").mouseover(function () {
  $("a.hello, a.whatwedo, a.work, a.contact").removeClass("white");
  $("a.hello, a.whatwedo, a.work, a.contact").addClass("solarize");
});

$("a.contact").mouseover(function () {
  $("a.hello, a.whatwedo, a.work, a.team").removeClass("white");
  $("a.hello, a.whatwedo, a.work, a.team").addClass("solarize");
});

$("button.navbar-toggler").click(function () {
  if (jQuery(window).width() < 920) {
    $("body").css("background-image", 'url("0,0,255.png")');
  }
});

$("a.hello").mouseout(function () {
  $(".countOne").css("display", "none");
});

$("a.hello").mouseover(function () {
  $(".countOne").css({
    display: "block",
    transition: "all 0.6s ease",
    "text-align": "center",
    margin: "auto",
  });
});

$("a.whatwedo").mouseout(function () {
  $(".countTwo").css("display", "none");
});

$("a.whatwedo").mouseover(function () {
  $(".countTwo").css({
    display: "block",
    transition: "all 0.6s ease",
    "text-align": "center",
    margin: "auto",
  });
});

$("a.work").mouseout(function () {
  $(".countThree").css("display", "none");
});

$("a.work").mouseover(function () {
  $(".countThree").css({
    display: "block",
    transition: "all 0.6s ease",
    "text-align": "center",
    margin: "auto",
  });
});

$("a.team").mouseout(function () {
  $(".countFour").css("display", "none");
});

$("a.team").mouseover(function () {
  $(".countFour").css({
    display: "block",
    transition: "all 0.6s ease",
    "text-align": "center",
    margin: "auto",
  });
});

$("a.contact").mouseout(function () {
  $(".countFive").css("display", "none");
});

$("a.contact").mouseover(function () {
  $(".countFive").css({
    display: "block",
    transition: "all 0.6s ease",
    "text-align": "center",
    margin: "auto",
  });
});
