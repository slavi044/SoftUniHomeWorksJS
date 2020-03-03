function solve() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Canot instantiable directly.')
            }
            this.name = name;
            this.age = age;
            this._salary = 0;
            this.tasks = [];
        }

        get salary() {
            return this._salary;
        }

        set salary(value) {
            return this._salary = value;
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.')
        }

        getSalary() {
            return this.salary;
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers');
        }

        getSalary() {
            return this.salary;
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.divident = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }

        getSalary() {
            return this.salary + this.divident;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}