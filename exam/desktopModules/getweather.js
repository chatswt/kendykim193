function getWeather(id, txt) {
    document.getElementById("info1").innerHTML = ''; document.getElementById("info2").innerHTML = ''; if (window.XMLHttpRequest) { xhttp = new XMLHttpRequest(); } else { xhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=" + id + "&mode=xml&appid=8cc0cf33ff7c6ac14e22653a3f1eca9b ", false);
    xhttp.send(); xmlDoc = xhttp.responseXML;
    img_icon = xmlDoc.getElementsByTagName('weather')[0].getAttribute('icon');
    updated = xmlDoc.getElementsByTagName('lastupdate')[0].getAttribute('value');
    clouds = xmlDoc.getElementsByTagName('clouds')[0].getAttribute('value');
    temperature = xmlDoc.getElementsByTagName('temperature')[0].getAttribute('value');
    wind_speed = xmlDoc.getElementsByTagName('speed')[0].getAttribute('value');
    humidity = xmlDoc.getElementsByTagName('humidity')[0].getAttribute('value');
    temperature = Math.round((parseFloat(temperature) - 274.15), 2);
    document.getElementById("info1").innerHTML += "<div class='weather'><img src='https://openweathermap.org/img/w/" + img_icon + ".png' height='30' title='Thời tiết' ></div>";
    document.getElementById("info2").innerHTML += "<div class='weather txt-left'>Nhiệt độ: " + temperature + " <span>o</span>C</div>";
    document.getElementById("info2").innerHTML += "<div class='weather txt-left'>Tốc độ gió: " + wind_speed + " m/s</div>";
    document.getElementById("info2").innerHTML += "<div class='weather txt-left'>Độ ẩm: " + humidity + " %</div>";

    document.getElementById("info3").innerHTML += "<div class='weather txt-left'>" + temperature + " <span>o</span>C</div>";
    $(".txtvl").text(txt); $(".ulvalue").hide()
};
//$(document).ready(function () { getWeather('1566083', 'TP. HCM'); });

