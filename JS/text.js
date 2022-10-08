$(window).load(function() {
    $('#top-mess').slideDown('fast');
});

$(document).ready(function() {
    $('#top-mess-hide').click(function() {
        if ($('#top-mess').is(':visible')) {
            $('#top-mess').slideUp('fast');
        }
    });
});