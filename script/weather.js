async function mausam(){
    var weather = await fetch("http://api.weatherapi.com/v1/current.json?key=13e1d773954a407d98970240242402&q=kanpur&aqi=no")
    weather = await weather.json();
    // console.log(weather)
    // console.log( "humidity " + weather.current.humidity)
    // console.log("temperature - celcius " +  weather.current.temp_c)
    // console.log("temperature - fahrenheight " + weather.current.temp_f)
    // console.log("wind " + weather.current.wind_kph, weather.current.wind_dir, weather.current.wind_degree)
    // console.log("cloud " + weather.current.cloud)
    // console.log(weather.current.last_updated)
    // console.log(weather.current.condition.text)
    // console.log(weather.location.name)
    // console.log(weather.location.region)
    // console.log(weather.location.country)       
    // console.log(weather.location.lat)       
    // console.log(weather.location.lon)       
    // console.log(weather.location.tz_id)       
    // console.log(weather.location.localtime)       
    // document.querySelector("#current #top #todayDate").innerHTML=`${weather.location.localtime}`;
    document.querySelector("#current #top #location").innerHTML=`Current Weather&nbsp;-&nbsp; ${weather.location.name}`;
    document.querySelector("#current #top #currentTime").innerHTML=weather.location.localtime;
    document.querySelector("#current #bottom #left #t #r").innerHTML=`${weather.current.temp_c} ℃`;
    document.querySelector("#current #bottom #left #d").innerHTML=weather.current.condition.text;
    document.querySelector("#current #bottom #right #tempC").innerHTML=`${weather.current.temp_c} ℃`;
    document.querySelector("#current #bottom #right #wind").innerHTML=`${weather.current.wind_dir} ${weather.current.wind_kph} km/h`;
    document.querySelector("#current #bottom #right #humidity").innerHTML=`${weather.current.humidity} g/kg`;
    document.querySelector("#current #bottom #right #cloud").innerHTML=`${weather.current.cloud}`;



}

mausam();


// {
//     "location": {
//         "name": "Kanpur",
//         "region": "Uttar Pradesh",
//         "country": "India",
//         "lat": 26.47,
//         "lon": 80.35,
//         "tz_id": "Asia/Kolkata",
//         "localtime_epoch": 1708758333,
//         "localtime": "2024-02-24 12:35"
//     },
//     "current": {
//         "last_updated_epoch": 1708758000,
//         "last_updated": "2024-02-24 12:30",
//         "temp_c": 22.0,
//         "temp_f": 71.6,
//         "is_day": 1,
//         "condition": {
//             "text": "Mist",
//             "icon": "//cdn.weatherapi.com/weather/64x64/day/143.png",
//             "code": 1030
//         },
//         "wind_mph": 2.2,
//         "wind_kph": 3.6,
//         "wind_degree": 86,
//         "wind_dir": "E",
//         "pressure_mb": 1017.0,
//         "pressure_in": 30.03,
//         "precip_mm": 0.0,
//         "precip_in": 0.0,
//         "humidity": 31,
//         "cloud": 50,
//         "feelslike_c": 22.1,
//         "feelslike_f": 71.7,
//         "vis_km": 5.0,
//         "vis_miles": 3.0,
//         "uv": 6.0,
//         "gust_mph": 6.7,
//         "gust_kph": 10.8
//     }
// }