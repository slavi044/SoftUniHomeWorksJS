function attachEvents() {
    const BASE_URL = `https://judgetests.firebaseio.com/locations.json`;
    const WEATHER_URL = `https://judgetests.firebaseio.com/forecast/{status}/{code}.json`;

    const elements = {
        locationInput: document.querySelector('#location'),
        button: document.querySelector('#submit'),
        currentDiv: document.querySelector('#current'),
        upcomingDiv: document.querySelector('#upcoming'),
        forecastWrapper: document.querySelector("#forecast") 
    }

    const weatherSymbols = {
        's': '☀',
        'p': '⛅',
        'o': '☁',
        'r': '☂',
        'd': '°'
    }

    function createHTMLElement(tagName, className, textContent) {
        let element = document.createElement(tagName);

        if (className) {
            element.classList.add(...className);
        }

        if (textContent) {
            element.textContent = textContent;
        }

        return element;
    }

    function showWeatherLocation([todayData, upcomingData]) {
        const { condition, high, low } = todayData.forecast;

        let forecastsDiv = createHTMLElement('div', ['forecasts']);
        let symbolSpan = createHTMLElement('span', ['condition', 'symbol'], weatherSymbols[condition[0].toLowerCase()]);
        let conditionSpan = createHTMLElement('span', ['condition']);

        let forecastFirstDataSpan = createHTMLElement('span', ['forecast-data'], todayData.name);
        let forecastSecondDataSpan = createHTMLElement('span', ['forecast-data'], `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`);
        let forecastThirthDataSpan = createHTMLElement('span', ['forecast-data'], condition);

        conditionSpan.appendChild(forecastFirstDataSpan);
        conditionSpan.appendChild(forecastSecondDataSpan);
        conditionSpan.appendChild(forecastThirthDataSpan);

        forecastsDiv.appendChild(symbolSpan);
        forecastsDiv.appendChild(conditionSpan);

        elements.currentDiv.appendChild(forecastsDiv);
        elements.forecastWrapper.style.display = 'block';
    };

    elements.button.addEventListener('click', getLocationValue);

    function getLocationValue() {
        let location = elements.locationInput.value;

        fetch(BASE_URL)
            .then((r) => r.json())
            .then((d) => {
                let { name, code } = d.find((o) => o.name === location)

                const CURRENT_TODAY_URL = WEATHER_URL.replace('{status}/{code}', `today/${code}`);
                const CURRENT_UPCOMING_URL = WEATHER_URL.replace('{status}/{code}', `upcoming/${code}`);

                Promise.all([
                    fetch(CURRENT_TODAY_URL).then(res => res.json()),
                    fetch(CURRENT_UPCOMING_URL).then(res => res.json())
                ])
                    .then(showWeatherLocation)
                    //.catch((e) => console.log(e.message))

            })
            //.catch((e) => console.log(e.message))
    };
}

attachEvents();