function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "15af8534ebfccf870bf98a398d52e6d1"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); // network 들어가서 보면 결과물 나온다. 신기방기
    // fetch나 json은 wetube 강의에서 자세히 설명함.
    
}
function onGeoError(){
    alert("Can't find you, No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);