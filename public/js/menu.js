$(document).ready(function () {
  const menu = $(".header-menu");
  const menuBtn = $(".menu-btn");
  menuBtn.on({
    click: function () {
      $(this).toggleClass("text-white");
      $(this).toggleClass("text-red-main");
      menu.toggleClass("invisible");
    },
  });
});
