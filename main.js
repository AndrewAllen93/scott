$(document).ready(function () {
    $("#toggle").click(function () {
      $(this).toggleClass("on");
      $("#resize").toggleClass("active");
    });
  });