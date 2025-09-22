inputElmt = document.querySelector("#cityInput");
btnElmt = document.querySelector("#fetchWeatherData");
resultElmt = document.querySelector("#showInfo");

btnElmt.addEventListener('click',()=>{
    cityName = inputElmt.value;
    fetchWeatherAPI(cityName);
})

function renderInfo(){
console.log(data)
resultElmt.innerHTML =`<h2>${data.name} <span><span></h2>
    <p>Weather : <span>${data.weather[0].main}</span></p>
    `
}

function fetchWeatherAPI(city){
    fetch('${city}' )//add api
        .then(response=>response.json())
        .then(data=>renderInfo(data))
        .catch(error=>console.log(error))
   

}