function getWeatherHome(id, txt) {
    document.getElementById("info1").innerHTML = ''; document.getElementById("info2").innerHTML = ''; document.getElementById("info3").innerHTML = '';
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?id=" + id + "&mode=json&appid=8cc0cf33ff7c6ac14e22653a3f1eca9b ",
        type: "GET"
    }).done(function (response) {
        img_icon = response.weather[0].icon;
        updated = response.lastupdate;
        clouds = response.clouds.all;
        //temperature = xmlDoc.getElementsByTagName('temperature')[0].getAttribute('value');
        wind_speed = response.wind.speed;
        humidity = response.main.humidity;
        temperature = Math.round((parseFloat(response.main.temp) - 274.15), 2);

        document.getElementById("info1").innerHTML += "<div class='weather'><img src='https://openweathermap.org/img/w/" + img_icon + ".png' height='30' alt='Thời tiết' ></div>";
        //document.getElementById("info1").innerHTML += "<div class='weather'><img src='/image/weather-icon/" + img_icon + ".png' height='30' alt='Thời tiết' ></div>";

        document.getElementById("info3").innerHTML += "<div class='weather txt-left'>" + temperature + " <span>o</span>C</div>";
        $(".txt-province").text(txt); $(".ulvalue").hide()
    })
};

var an = true, w = 360; if ($(window).width() < 360) { w = $(window).width() - 100; } else if ($(window).width() < 767) { w = $(window).width() - 80; }
function searchclick() {
    if ($("#seach-box").val() != "") { doSearchSite("seach-box"); return false; } else { $('#seach-box').fadeToggle(100); $('#seach-box').focus(); }
};

//Update Datetime
function updateDateTime() {
    var currentTime = new Date(); var currentDay = currentTime.getDay(); var currentDate = currentTime.getDate(); var currentMon = currentTime.getMonth() + 1; var currentYr = currentTime.getFullYear(); var currentHours = currentTime.getHours(); var currentMinutes = currentTime.getMinutes(); var currentSeconds = currentTime.getSeconds(); currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes; currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds; currentHours = (currentHours < 10 ? "0" : "") + currentHours; currentDate = (currentDate < 10 ? "0" : "") + currentDate; currentMon = (currentMon < 10 ? "0" : "") + currentMon; var timeOfDay = (currentHours < 24) ? "" : ""; if (currentDay == 0) { currentDay = "Chủ nhật, "; }; if (currentDay == 1) { currentDay = "Thứ hai, "; }; if (currentDay == 2) { currentDay = "Thứ ba, "; }; if (currentDay == 3) { currentDay = "Thứ tư, "; }; if (currentDay == 4) { currentDay = "Thứ năm, "; }; if (currentDay == 5) { currentDay = "Thứ sáu, "; }; if (currentDay == 6) { currentDay = "Thứ bảy, "; }; currentHours = (currentHours == 0) ? 12 : currentHours; var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay; var currentDateString = currentDay + " " + currentDate + "/" + currentMon + "/" + currentYr; document.getElementById("time").firstChild.nodeValue = currentTimeString; document.getElementById("date").firstChild.nodeValue = currentDateString;
};
updateDateTime(); setInterval("updateDateTime()", 1000);


$(function () {
    var path = location.pathname;
    var currHref = location.href.replace('https://', '').replace('http://', '');
    var origin = location.origin.replace('https://', '').replace('http://', '');
    $('.main-menu li').removeClass("active");
    $('.main-menu li').each(function (index) {
        var link = $(this).find('a').attr('href').replace('https://', '').replace('http://', '').replace();
        if ((currHref.indexOf(link) != -1 && link != origin && path != "/") || (link == origin && path == "/")) {
            $(this).addClass('active'); return;
        }
    });

    var stickyHeaderTop = $('.vmenu').offset().top;
    if ($(window).scrollTop() > stickyHeaderTop) {
        $('.body').addClass('fixtop');
    } else { $('.body').removeClass('fixtop'); }

    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderTop) { $('.body').addClass('fixtop'); } else { $('.body').removeClass('fixtop'); }
    });

    getWeatherHome('1581130', 'Hà Nội'); $(".arrowDown").click(function () { $(".ulvalue").slideToggle() });


});