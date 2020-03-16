function attachEvents() {
    const BASE_URL = `https://judgetests.firebaseio.com/locations.json`;
    const WEATHER_URL = `https://judgetests.firebaseio.com/forecast/{status}/{code}.json`;

    const elements = {
        locationInput: document.querySelector('#location'),
        button: document.querySelector('#submit')
    }

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
                    .catch((e) => console.log(e.message))

            })
            .catch((e) => console.log(e.message))
    };
}

attachEvents();