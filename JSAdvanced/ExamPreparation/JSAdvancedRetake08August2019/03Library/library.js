class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this._subscriptionTypes = {
            normal: libraryName.length,
            special: libraryName.length * 2,
            vip: Number.MAX_VALUE
        }
    }

    subscribe(name, type) {
        if (type !== 'normal' && type !== 'special' && type !== 'vip') {
            throw new Error(`The type ${type} is invalid`);
        }

        let newSub;

        let sub = this.subscribers.find(x => x.name === name);

        if (sub) {
            sub.type = type;

        } else {
            newSub = {
                name: name,
                type: type,
                books: []
            };

            this.subscribers.push(newSub);
        }

        return newSub;
    }

    unsubscribe(name) {
        let subToRemove = this.subscribers.find(x => x.name === name);

        if (!subToRemove) {
            throw new Error(`There is no such subscriber as ${name}`)
        }

        let index = this.subscribers.indexOf(subToRemove);
        this.subscribers.splice(index, 1);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let sub = this.subscribers.find(x => x.name === subscriberName);

        if (!sub) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        if (this._subscriptionTypes[sub.type] <= sub.books.length) {
            throw new Error(`You have reached your subscription limit ${this._subscriptionTypes[sub.type]}!`);
        }

        sub.books.push({ title: bookTitle, author: bookAuthor });

        return sub;
    }

    showInfo() {
        if (this.subscribers.length === 0) {
            return `${this.libraryName} has no information about any subscribers`
        }

        let output = '';

        for (const sub of this.subscribers) {
            output += `Subscriber: ${sub.name}, Type: ${sub.type}\n`;
            output += 'Received books:';

            for (const book of sub.books) {
                output += ` ${book.title} by ${book.author},`
            }
            output = output.substring(0, output.length - 1);
            output += `\n`;
        }

        output = output.substring(0, output.length);

        return output;
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());