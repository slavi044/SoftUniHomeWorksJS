function solve() {
    class Melon {
        constructor(weight,melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this._weight = weight;
            this._melonSort = melonSort;
            this.arrayMelon = ["Water","Fire","Earth","Air"];
        }
        get weight() {
            return this._weight;
        }
        get melonSort() {
            return this._melonSort;
        }
        toString() {
            return `Sort: ${this.melonSort}\n`
        }
    }
 
    class Watermelon extends Melon {
        constructor(weight,melonSort) {
            super(weight,melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString() {
            return `Element: ${this.arrayMelon[0]}\n`+ super.toString() + `\nElement index: ${this.elementIndex}`
        }
    }
 
    class Firemelon extends Melon{
        constructor(weight,melonSort) {
            super(weight,melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString() {
            return `Element: ${this.arrayMelon[1]}\n`+ super.toString() + `\nElement index: ${this.elementIndex}`
        }
    }
    class Earthmelon extends Melon{
        constructor(weight,melonSort) {
            super(weight,melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString() {
            return `Element: ${this.arrayMelon[2]}\n`+ super.toString() + `\nElement index: ${this.elementIndex}`
        }
    }
    class Airmelon extends Melon{
        constructor(weight,melonSort) {
            super(weight,melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString() {
            return `Element: ${this.arrayMelon[2]}\n`+ super.toString() + `\nElement index: ${this.elementIndex}`
        }
    }
 
    class Melolemonmelon extends Watermelon {
        constructor(weight,melonSort) {
            super(weight,melonSort);
            this.counter = 0;
            this.arr = [Watermelon, Firemelon, Earthmelon,Airmelon]
        }
 
        morph() {
            this.toString = function () {
                return new this.arr[this.counter % 4](this.weight, this.melonSort).toString()
            };
            this.counter++;
            return this;
        }
 
        toString() {
            let str = 'Water';
            return `Element: ${str}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
 
 
    }
 
    return {Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon}
}