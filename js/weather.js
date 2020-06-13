const weather = document.querySelector(".js-weather");
const API_KEY = "ec6d57ffe9cb23520702a3feecdcd97c";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(respnse){
        return respnse.json();
    })
    .then(function(json){
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} ° | ${place}`;
    });

}

function saveCoords(coordsobj){
    localStorage.setItem(COORDS, JSON.stringify(coordsobj));
}

function handleGeoSucces(position){
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsobj = {
        latitude,
        longitude
    };
    saveCoords(coordsobj);
    getWeather(latitude, longitude);
}


function handleGeoError(){
    console.log(`cant access geo location `)
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);    }
}
function init(){
    loadCoords();
}

init();