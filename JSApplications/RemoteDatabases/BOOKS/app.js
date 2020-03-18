import { get } from './firebase-requests.js';

function engine() {
    get().then(console.log);
}

engine();