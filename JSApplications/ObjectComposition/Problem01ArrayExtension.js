let myArr = [1, 2, 3];

Array.prototype.last = function () {
    return this[this.length - 1];
}

Array.prototype.skip = function (n) {
    let resultArr = [];
    for (let index = n; index < this.length; index++) {
        resultArr.push(this[index]);

    }

    return resultArr;
}

Array.prototype.take = function (n) {
    let resultArr = [];
    for (let index = 0; index < n; index++) {
        resultArr.push(this[index]);

    }

    return resultArr;
}

Array.prototype.sum = function () {
    let sum = 0;
    for (let index = 0; index < this.length; index++) {
        sum += Number(this[index]);
        
    }

    return sum;
}

Array.prototype.average = function () {
    let sum = 0;
    for (let index = 0; index < this.length; index++) {
        sum += Number(this[index]);
        
    }

    return sum / this.length;
}

console.log(myArr.average());

// (function solve() {   <--- This is for test in judge.softuni.bg
//     Array.prototype.last = function () {
//         return this[this.length - 1];
//     }
    
//     Array.prototype.skip = function (n) {
//         let resultArr = [];
//         for (let index = n; index < this.length; index++) {
//             resultArr.push(this[index]);
    
//         }
    
//         return resultArr;
//     }
    
//     Array.prototype.take = function (n) {
//         let resultArr = [];
//         for (let index = 0; index < n; index++) {
//             resultArr.push(this[index]);
    
//         }
    
//         return resultArr;
//     }
    
//     Array.prototype.sum = function () {
//         let sum = 0;
//         for (let index = 0; index < this.length; index++) {
//             sum += Number(this[index]);
            
//         }
    
//         return sum;
//     }

//     Array.prototype.average = function () {
//         let sum = 0;
//         for (let index = 0; index < this.length; index++) {
//             sum += Number(this[index]);
            
//         }
    
//         return sum / this.length;
//     }
// }())