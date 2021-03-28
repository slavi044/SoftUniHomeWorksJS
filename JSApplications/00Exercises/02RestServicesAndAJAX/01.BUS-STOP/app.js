function getInfo() {
    let inputField = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');
    let validBuses = ['1287', '1308', '1327', '2334'];

    if (!validBuses.includes(inputField.value)) {
        stopName.textContent = 'Error';
        return;
    }

    const url = `https://judgetests.firebaseio.com/businfo/${inputField.value}.json`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            stopName.textContent = data.name;

            Object.keys(data.buses).forEach(key => {
                let li = document.createElement('li');
                li.textContent = `Bus ${key} arrives in ${data.buses[key]}`;
                buses.appendChild(li);
            })
        });

    stopName.textContent = '';
}