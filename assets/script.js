let dateEntry = document.querySelector(".day");
///event listener should wrap around all the fetch requests
// add API key to keep it secure.
fetch("https://api.openweathermap.org/geo/1.0/direct?q=Dallas&limit=5&appid=2c06efa701ce6807a95b89f2e9f1e20f")
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
    })