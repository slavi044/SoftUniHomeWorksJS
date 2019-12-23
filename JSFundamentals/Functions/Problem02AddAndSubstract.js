function addAndSubstract(firstN, secoundN, thirthN) {
    let add = (a, b) => {return a + b};
    let substract = (a, b) => {return a - b};
    
    let result = add(firstN, secoundN);
    return substract(result, thirthN);
     
}

console.log(addAndSubstract(23, 6, 10));