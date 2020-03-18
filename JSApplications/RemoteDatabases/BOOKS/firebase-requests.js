const fireBaseUrl = 'https://remotedb-exercisebooks.firebaseio.com/'; // <-- Here paste URL from your database! :) 

function get() {
    return fetch(fireBaseUrl + 'remotedb-exercisebooks.json')
        .then(res => res.json());
}

export { get }