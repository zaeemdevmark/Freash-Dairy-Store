$(document).ready(function () {
    $(".slider").slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
    });
    $(".nav_trigger").click(function () {
        $(".site-content-wrapper").toggleClass("scaled");
    })
});
