let dateEntry = document.querySelector(".day");
let confirmCity = document.querySelector(".btn");
let cityField = document.querySelector("#enterCity");

let boxToday = document.querySelector("#weatherToday");
let boxTomorrow = document.querySelector("#weatherTomorrow");
let box2Days = document.querySelector("#weather2Days");
let box3Days = document.querySelector("#weather3Days");
let box4Days = document.querySelector("#weather4Days");
///event listener should wrap around all the fetch requests
// add API key to keep it secure.


// confirmCity.addEventListener("click", function(){
    // let city = cityField.value;
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Dallas&limit=5&appid=2c06efa701ce6807a95b89f2e9f1e20f`)

            .then(response => response.json())
            .then(cityData => {
                let cityReturn = cityData[0];
                console.log(cityReturn.lat);
                console.log(cityReturn.lon);

                return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityReturn.lat}&lon=${cityReturn.lon}&appid=2c06efa701ce6807a95b89f2e9f1e20f`)
            })


            .then(response => response.json())
            .then(data => {
                console.log(data);
                fillBoxes(data);
            })
// })

function fillBoxes(data){
    let todayTempConvert = Math.trunc((((data.list[0].main.temp) - 273.15) * (9/5)) + 32);
    boxToday.textContent = (todayTempConvert + "\xB0");
    let tomorrowTempConvert = Math.trunc((((data.list[8].main.temp) - 273.15) * (9/5)) + 32);
    boxTomorrow.textContent = (tomorrowTempConvert + "\xB0");
    let twoDayTempConvert = Math.trunc((((data.list[16].main.temp) - 273.15) * (9/5)) + 32);
    box2Days.textContent = (twoDayTempConvert + "\xB0");
    let threeDayTempConvert = Math.trunc((((data.list[24].main.temp) - 273.15) * (9/5)) + 32);
    box3Days.textContent = (threeDayTempConvert + "\xB0");
    let fourDayTempConvert = Math.trunc((((data.list[24].main.temp) - 273.15) * (9/5)) + 32);
    box4Days.textContent = (fourDayTempConvert + "\xB0");
}