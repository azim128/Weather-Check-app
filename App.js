const inutcapture=()=>{
    const city=document.getElementById('input-value').value;
    requestApi(city);
}
let cityName =document.getElementById('cityName')
function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ac05679db6499ab1af0423d054b07409`;
    fetchData();
}

function fetchData(){
    fetch(api)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('cityName', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('pressure', temperature.main.pressure);
    setInnerText('humi', temperature.main.humidity);
    setInnerText('condition', temperature.weather[0].description);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}