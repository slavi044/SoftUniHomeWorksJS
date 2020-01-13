function sovle(firstN, secoundN) {
    for (let i = 10; i >= 0; i--) {
        if (firstN % i === 0 && secoundN % i === 0) {
            console.log(i);
            break;
        }
        
    }

}

sovle(15, 5);