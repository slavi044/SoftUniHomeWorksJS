function solve() {
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let info = document.getElementById('info');

    let nextStop = 'depot';
    let currentStop = '';
    
    function depart() {
        const url = `https://judgetests.firebaseio.com/schedule/${nextStop}.json`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                nextStop = data.next;
                info.textContent = `Next stop ${data.name}`;
                currentStop = data.name;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(res => {
                if (res.ok === false) {
                    throw new Error(`${res.status} - ${res.statusText}`);
                }
                return res;
            })
    }

    function arrive() {
        info.textContent = `Arriving at ${currentStop}`;
        currentStop = nextStop;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();