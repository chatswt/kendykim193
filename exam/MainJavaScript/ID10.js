jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        if (($(".home-slideReader").hasClass("set") == false) && (jQuery(this).scrollTop() > 3320)) {
            $(".home-slideReader").addClass("set"); $.ajax({ type: "GET", url: '/api/home/homeBlock.asmx/values?pid=' + 0 + "&setupKey=HOMEBLOCK_SLIDE_READER", success: function (data) { var json = $.parseJSON($(data).find("string").text()); if (json.data) { $(".home-slideReader").html(json.data); slideReaderOwl(); }; }, });
        }
    });
});