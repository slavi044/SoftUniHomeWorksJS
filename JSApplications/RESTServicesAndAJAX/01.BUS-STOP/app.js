function getInfo() {
    let stopIdInput = document.getElementById('stopId');
    let stopNameDiv = document.getElementById('stopName');
    let busContainer = document.getElementById('buses');

    const busesUrl = `https://judgetests.firebaseio.com/businfo/${stopIdInput.value}.json`;

    stopNameDiv.textContent = '';
    busContainer.innerHTML = '';

    fetch(busesUrl)
        .then(res => res.json())
        .then(data => {
            const { name, buses } = data;
            stopNameDiv.textContent = name;
            Object.entries(buses)
                .forEach(([busId, busTime]) => {
                const li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${busTime} minutes.`;
                busContainer.appendChild(li);
            });
        }).catch((err) => {
            stopNameDiv.textContent = 'Error';
        });
}