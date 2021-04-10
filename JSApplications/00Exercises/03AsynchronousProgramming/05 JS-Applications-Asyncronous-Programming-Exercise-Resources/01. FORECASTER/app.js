function attachEvents() {
    let inputField = document.getElementById('location');
    let submitBtn = document.getElementById('submit');
    let currentCondDiv = document.getElementById('current');
    let forecastDiv = document.getElementById('forecast');
    let upcomingCondDiv = document.getElementById('upcoming');

    const forecastObj = {
        'Sunny': '☀',
        'Partly sunny': '⛅', 
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    };

    submitBtn.addEventListener('click', takeForecast);

    async function takeForecast() {
        let city = inputField.value;
        let cityCode;

        let url = 'https://judgetests.firebaseio.com/locations.json';
        await fetch(url)
            .then(res => res.json())
            .then((res) => {
                for (let i = 0; i < res.length; i++) {
                    if (res[i].name === city) {
                        code = res[i].code;
                    }
                }
            });



        let currentForecastUrl = `https://judgetests.firebaseio.com/forecast/today/${code}.json`;
        await fetch(currentForecastUrl)
            .then(res => res.json())
            .then((res) => {
                let div = document.createElement('div');
                let condSymbSpan = document.createElement('span');
                let mainSpan = document.createElement('span');
                let citySpan = document.createElement('span');
                let degreesSpan = document.createElement('span');
                let typeSpan = document.createElement('span');

                div.classList = 'forecasts'
                condSymbSpan.textContent = forecastObj[res.forecast.condition];
                condSymbSpan.classList = 'condition symbol';
                mainSpan.classList = 'condition';
                citySpan.textContent = res.name;
                citySpan.classList = 'forecast-data';
                degreesSpan.textContent = `${res.forecast.low}${forecastObj.Degrees}/${res.forecast.high}${forecastObj.Degrees}`;
                degreesSpan.classList = 'forecast-data';
                typeSpan.textContent = res.forecast.condition;
                typeSpan.classList = 'forecast-data';

                mainSpan.appendChild(citySpan);
                mainSpan.appendChild(degreesSpan);
                mainSpan.appendChild(typeSpan);
                div.appendChild(condSymbSpan);
                div.appendChild(mainSpan);
                currentCondDiv.appendChild(div);

                forecastDiv.style.display = 'block';
            });

        let thirtUrl = `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`;
        await fetch(thirtUrl)
            .then(res => res.json())
            .then(res => {
                let div = document.createElement('div');
                for (let i = 0; i < res.forecast.length; i++) {
                    console.log(res.forecast[i].high);
                    
                    let mainSpan = document.createElement('span');
                    let condSymbSpan = document.createElement('span');
                    let degreesSpan = document.createElement('span');
                    let typeSpan = document.createElement('span');

                    div.classList = 'forecast-info';
                    mainSpan.classList = 'upcoming';
                    condSymbSpan.textContent = forecastObj[res.forecast[i].condition]
                    condSymbSpan.classList = 'symbol';
                    degreesSpan.textContent = `${res.forecast[i].low}${forecastObj.Degrees}/${res.forecast[i].high}${forecastObj.Degrees}`;
                    degreesSpan.classList = 'forecast-data';
                    typeSpan.textContent = res.forecast[i].condition;
                    typeSpan.classList = 'forecast-data';

                    mainSpan.appendChild(condSymbSpan);
                    mainSpan.appendChild(degreesSpan);
                    mainSpan.appendChild(typeSpan);
                    div.appendChild(mainSpan);
                    

                }
                upcomingCondDiv.appendChild(div);
            });
    }
}

attachEvents();