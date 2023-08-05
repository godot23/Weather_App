///event listener should wrap around all the fetch requests
fetch("https://api.openweathermap.org/geo/1.0/direct?q=Dallas&limit=5&appid=5d7f52a9c8f4587b04685e80174a55f3")
    .then(response => response.json())
    .then(cityData => {
        let cityReturn = cityData[0];
        console.log(cityReturn.lat);
        console.log(cityReturn.lon);

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityReturn.lat}&lon=${cityReturn.lon}&appid=5d7f52a9c8f4587b04685e80174a55f3`)
    })


    .then(response => response.json())
    .then(data => {
        console.log(data);
    })