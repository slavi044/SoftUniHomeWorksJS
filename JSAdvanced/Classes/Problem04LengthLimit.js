class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }

    toString() {
        let str = '';
        let counter = 0

        if (this.innerLength > this.innerString.length) {
            counter = this.innerString.length
        } else  {
            counter = this.innerLength;
        }

        for (let i = 0; i < counter; i++) {
            str += this.innerString[i];
            
        }

        if (this.innerLength < this.innerString.length - 1) {
            str +='...';
        }

        return str;
    }
};

let test = new Stringer('Test', 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test