$(document).ready(function () {
  $(".footerSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    rows: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "200px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // $(window).on("resize", function () {
  //   var win = $(this); //this = window
  //   if (win.width() > 768) {
  //     $("footer .price-package").addClass("footerSlider");
  //     console.log("huy");
  //   } else {
  //     $("footer .price-package").remove("footerSlider");
  //   }
  // });
});
