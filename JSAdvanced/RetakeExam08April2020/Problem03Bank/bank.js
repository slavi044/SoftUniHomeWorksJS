class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let findCustomer = this.allCustomers.find(x => x.personalId === customer.personalId);

        if (findCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }

        customer.totalMoney = 0;
        customer.trasactionInformation = [];//trasactionInformation transaction

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        let findCustomer = this.allCustomers.find(x => x.personalId === personalId);

        if (!findCustomer) {
            throw new Error(`We have no customer with this ID!`)
        }

        findCustomer.totalMoney += amount;


        findCustomer.trasactionInformation.push({
            numberOftransaction: findCustomer.trasactionInformation.length + 1,
            names: [findCustomer.firstName, findCustomer.lastName],
            type: `${findCustomer.firstName} ${findCustomer.lastName} made deposit of ${amount}$!`,
            amount: amount
        });

        findCustomer.trasactionInformation.sort((a, b) => { return b.numberOftransaction - a.numberOftransaction });

        return `${findCustomer.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        let findCustomer = this.allCustomers.find(x => x.personalId === personalId);

        if (!findCustomer) {
            throw new Error(`We have no customer with this ID!`)
        }

        if (findCustomer.totalMoney < amount) {
            throw new Error(`${findCustomer.firstName} ${findCustomer.lastName} does not have enough money to withdraw that amount!`)
        }

        findCustomer.totalMoney -= amount;

        findCustomer.trasactionInformation.push({
            numberOftransaction: findCustomer.trasactionInformation.length + 1,
            names: [findCustomer.firstName, findCustomer.lastName],
            type: `${findCustomer.firstName} ${findCustomer.lastName} withdrew ${amount}$!`,
            amount: amount
        });

        findCustomer.trasactionInformation.sort((a, b) => { return b.numberOftransaction - a.numberOftransaction });

        return `${findCustomer.totalMoney}$`
    }

    customerInfo(personalId) {
        let findCustomer = this.allCustomers.find(x => x.personalId === personalId);

        if (!findCustomer) {
            throw new Error(`We have no customer with this ID!`)
        }

        let str = `Bank name: ${this.bankName}\nCustomer name: ${findCustomer.firstName} ${findCustomer.lastName}\nCustomer ID: ${findCustomer.personalId}\nTotal Money: ${findCustomer.totalMoney}$\nTransactions:\n`;

        for (const tr of findCustomer.trasactionInformation) {
            str += `${tr.numberOftransaction}. ${tr.type}\n`;

        }

        return str.trim();
    }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

console.log(bank.depositMoney(6233267, 250));
console.log(bank.depositMoney(6233267, 250));
console.log(bank.depositMoney(4151596, 555));
// console.log(bank.withdrawMoney(6233267, 250));
// console.log(bank.customerInfo(6233267));