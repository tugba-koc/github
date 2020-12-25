$("button.navbar-toggler").click(function () {
  $("button.navbar-toggler").addClass("correct");
  $("nav.navbar.navbar-light").addClass("correct");
  $("p").addClass("correct");
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
});

$("button.navbar-toggler").click(function () {
  $("body").css("background-image", 'url("0,0,255.png")');
});

//

$("a.hello").mouseover(function () {
  if (jQuery(window).width() > 921) {
  $("body").css({
    "background-image": 'url("0,0,255.png")',
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "transition": "all 0.6s ease",
    "background-position": "center",
  });
};
});

//

$("a.whatwedo").mouseover(function () {
  if (jQuery(window).width() > 921) {
  $("body").css({
    "background-image": 'url("whatwedo.jpg")',
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "transition": "all 0.6s ease",
    "background-position": "center",
  });
};
});

$("a.whatwedo").mouseout(function () {
  if (jQuery(window).width() > 921) {
  $("body").css({
    "background-image": 'url("0,0,255.png")',
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "transition": "all 0.6s ease",
    "background-position": "center",
  });
};
});

//

$("a.work").mouseover(function () {
  if (jQuery(window).width() > 921) {
  $("body").css({
    "background-image": 'url("work.jpg")',
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "transition": "all 0.6s ease",
    "background-position": "center",
  });
};
});

$("a.work").mouseout(function () {
  if (jQuery(window).width() > 921) {
  $("body").css({
    "background-image": 'url("0,0,255.png")',
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "transition": "all 0.6s ease",
    "background-position": "center",
  });
};
});

//

$("a.team").mouseover(function () {
  if (jQuery(window).width() > 921) {
  $("body").css({
    "background-image": 'url("team.jpg")',
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "transition": "all 0.6s ease",
    "background-position": "center",
  });
};
});

$("a.team").mouseout(function () {
  if (jQuery(window).width() > 921) {
  $("body").css({
    "background-image": 'url("0,0,255.png")',
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "transition": "all 0.6s ease",
    "background-position": "center",
  });
};
});

//

$("a.contact").mouseover(function () {
  if (jQuery(window).width() > 921) {
  $("body").css({
    "background-image": 'url("contact.jpg")',
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "transition": "all 0.6s ease",
    "background-position": "center",
  })
};
});

$("a.contact").mouseout(function () {
  if (jQuery(window).width() > 921) {
  $("body").css({
    "background-image": 'url("0,0,255.png")',
    "background-repeat": "no-repeat",
    "background-size": "cover",
    "transition": "all 0.6s ease",
    "background-position": "center",
  })
};
});



$("a.hello").mouseover(function () {
  $("a").addClass("grey");
});

$("a.hello").mouseout(function () {
  $("a").removeClass("grey");
});

$("button.navbar-toggler").click(function () {
  if (jQuery(window).width() < 920) {
    $("body").css("background-image", 'url("0,0,255.png")');
  }
});
