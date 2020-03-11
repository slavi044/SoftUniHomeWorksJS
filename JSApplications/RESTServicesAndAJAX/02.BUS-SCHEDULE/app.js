function solve() {
    let infoField = document.querySelector('.info');
    let btnDepart = document.getElementById('depart');
    let btnArrive = document.getElementById('arrive');

    let currentStop = '';
    let nextStop = 'depot';

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${nextStop}.json`)
        .then(x => x.json())
        .then(getNextStop)
    }

    function arrive() {
        infoField.textContent = `Arriving at ${currentStop}`;
        btnDepart.disabled = false;
        btnArrive.disabled = true;
    }

    function getNextStop({ name, next}) {
        currentStop = name;
        nextStop = next;
        infoField.textContent = `Next stop ${name}`;
        btnDepart.disabled = true;
        btnArrive.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();