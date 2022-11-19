$(document).ready(function () {
    //if ($(window).width() > 767) {
        var owlHomeSlide = $('.home-owl-hs'); owlHomeSlide.owlCarousel({ autoplay: true, animateOut: 'fadeOut', nav: true, navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"], loop: true, dots: false, autoplayTimeout: 5000, pagination: false, margin: 30, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } } });
    //}
    //else {
    //    $('.home-owl-hs').removeClass('owl-carousel');
    //}

    $('.home-owlLink').owlCarousel({ loop: true, margin: 10, dots: false, autoplay: true,  nav: true, navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"], responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } } });
    $('#webticker-update-example').marquee({ speed: 50, gap: 20, delayBeforeStart: 0, direction: 'left', duplicated: true, pauseOnHover: true });
    loadSrcADV();
});



//$(function () {
//})
function loadSrcADV() {
    if ($(window).width() < 768) { //Nếu sizemobile thì xóa thuộc tính width của ảnh gif đi
        $(".advrtise img").each(function () {
            var str = $(this).attr("src");
            if (str != undefined && str.search(".gif") != -1)
                $(this).removeAttr("width");
        })
        return false;
    }

    $(".advrtise img").each(function (t) {
        var w = $(this).closest("div.advrtise0").width();
        if (w != undefined) {
            var str = $(this).attr("src");
            if (str != undefined && str.search(".gif") == -1) {
                var currIndex = str.lastIndexOf("w=") + 2;
                if (currIndex != 1) {
                    var startStr = str.substring(0, currIndex);
                    var endStr = str.substring(str.indexOf("&", currIndex), str.length);
                    newSrc = startStr + w.toString() + endStr;
                } else {
                    newSrc = str + "&w=" + w.toString();
                }
                $(this).attr("src", newSrc);
            }
            else {
                //$(this).attr("src", str).removeAttr("data-src");
                $(this).attr("width", w.toString() + 'px');
            }
        }
    });
}