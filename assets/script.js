let dateEntry = document.querySelector(".day");
let confirmCity = document.querySelector(".btn");
let cityField = document.querySelector("#enterCity");

let boxToday = document.querySelector("#weatherToday");
let boxTomorrow = document.querySelector("#weatherTomorrow");
let box2Days = document.querySelector("#weather2Days");
let box3Days = document.querySelector("#weather3Days");
let box4Days = document.querySelector("#weather4Days");
let todayTitle = document.querySelector("#title-today");
let tomorrowTitle = document.querySelector("#title-tomorrow");
let twoDayTitle = document.querySelector("#title-two-days");
let threeDayTitle = document.querySelector("#title-three-days");
let fourDayTitle = document.querySelector("#title-four-days")
///event listener should wrap around all the fetch requests
// add API key to keep it secure.
let city;

confirmCity.addEventListener("click", function(event){
    event.preventDefault();
    city = cityField.value;
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2c06efa701ce6807a95b89f2e9f1e20f`)

            .then(response => response.json())
            .then(cityData => {
                let cityReturn = cityData[0];
                console.log(cityReturn.lat);
                console.log(cityReturn.lon);

                return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityReturn.lat}&lon=${cityReturn.lon}&appid=2c06efa701ce6807a95b89f2e9f1e20f`)
            })


            .then(response => response.json())
            .then(data => {

                fillBoxes(data);
            })
            
})


function fillBoxes(data){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c06efa701ce6807a95b89f2e9f1e20f`)
  .then(response => response.json())
  .then(data2 => {
    console.log(data);
    let todayIconId = data.list[0].weather[0].icon;
    let todayIconUrl = `http://openweathermap.org/img/w/${todayIconId}.png`;
    let tomorrowIconId = data.list[8].weather[0].icon;
    let tomorrowIconUrl = `http://openweathermap.org/img/w/${tomorrowIconId}.png`;
    let twoIconId = data.list[16].weather[0].icon;
    let twoIconUrl = `http://openweathermap.org/img/w/${twoIconId}.png`;
    let threeIconId = data.list[24].weather[0].icon;
    let threeIconUrl = `http://openweathermap.org/img/w/${threeIconId}.png`;
    let fourIconId = data.list[32].weather[0].icon;
    let fourIconUrl = `http://openweathermap.org/img/w/${fourIconId}.png`;

    let todayIconImage = document.createElement('img');
    let tomorrowIconImage = document.createElement('img');
    let twoIconImage = document.createElement('img');
    let threeIconImage = document.createElement('img');
    let fourIconImage = document.createElement('img');

    todayIconImage.src = todayIconUrl;
    tomorrowIconImage.src = tomorrowIconUrl;
    twoIconImage.src = twoIconUrl;
    threeIconImage.src = threeIconUrl;
    fourIconImage.src = fourIconUrl;

    boxToday.append(todayIconImage);
    boxTomorrow.append(tomorrowIconImage);
    box2Days.append(twoIconImage);
    box3Days.append(threeIconImage);
    box4Days.append(fourIconImage);
  })
  .catch(error => {
    console.error('Error fetching icon:', error);
  });

    
    let todayTempConvert = Math.trunc((((data.list[0].main.temp) - 273.15) * (9/5)) + 32);
    let todayHum = data.list[0].main.humidity;
    let todayWind = data.list[0].wind.speed;

    boxToday.textContent = ("Temp: " + todayTempConvert + "\xB0" + ", Humidity: " + todayHum + ", Wind Speed: " + todayWind);
    let tomorrowTempConvert = Math.trunc((((data.list[8].main.temp) - 273.15) * (9/5)) + 32);
    let tomHum = data.list[8].main.humidity;
    let tomWind = data.list[8].wind.speed;
    boxTomorrow.textContent = ("Temp: " + tomorrowTempConvert + "\xB0" + ", Humidity: " + tomHum + ", Wind Speed: " + tomWind);
    let twoDayTempConvert = Math.trunc((((data.list[16].main.temp) - 273.15) * (9/5)) + 32);
    let twoDayHum = data.list[16].main.humidity;
    let twoDayWind = data.list[16].wind.speed;
    box2Days.textContent = ("Temp: " + twoDayTempConvert + "\xB0" + ", Humidity: " + twoDayHum + ", Wind Speed: " + twoDayWind);
    let threeDayTempConvert = Math.trunc((((data.list[24].main.temp) - 273.15) * (9/5)) + 32);
    let threeDayHum = data.list[24].main.humidity;
    let threeDayWind = data.list[24].wind.speed;
    box3Days.textContent = ("Temp: " + threeDayTempConvert + "\xB0" + ", Humidity: " + threeDayHum + ", Wind Speed: " + threeDayWind);
    let fourDayTempConvert = Math.trunc((((data.list[32].main.temp) - 273.15) * (9/5)) + 32);
    let fourDayHum = data.list[32].main.humidity;
    let fourDayWind = data.list[32].wind.speed;
    box4Days.textContent = ("Temp: " + fourDayTempConvert + "\xB0" + ", Humidity: " + fourDayHum + ", Wind Speed: " + fourDayWind);

    let dateTomorrow = dayjs().add(1, 'day');
    let dateTwoDays = dayjs().add(2, 'day');
    let dateThreeDays = dayjs().add(3, 'day');
    let dateFourDays = dayjs().add(4, 'day');
    console.log(dateTomorrow);
    todayTitle.textContent = dayjs().format("dddd")
    tomorrowTitle.textcontent = dayjs(dateTomorrow).format("dddd");
    twoDayTitle.textContent = dayjs(dateTwoDays).format("dddd");
    threeDayTitle.textContent = dayjs(dateThreeDays).format("dddd");
    fourDayTitle.textContent = dayjs(dateFourDays).format("dddd");
}