function openurl(t) { if ($(t).val() != "") { window.open($(t).val(), '_blank'); } };
    $(document).ready(function () {
        $('.clickWeblink').on('click', function () { $('.dropdown-menu').css("display", "block"); });
        //$('.col-md-4').on('click', function () {
        //    $('.dropdown-menu').css("display", "none");
        //}); $(".dropdown-menu").hover(function () { $(this).css("display", "block"); }, function () { $(this).css("display", "none"); });
    });