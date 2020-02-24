class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (username === '' || username === undefined || username === null ||
            salary === '' || salary === undefined || salary === null ||
            position === '' || position === undefined || position === null ||
            department === '' || department === undefined || department === null) {
            throw new Error('Invalid input!');

        } else if (salary < 0) {
            throw new Error('Invalid input!');
        }

        let depObj = this.departments.find((d) => d.name === department);

        if (!depObj) {
            depObj = {
                name: department,
                employees: [],
                avrSalary: function () {
                    return this.employees.reduce((totalSalary, employee) => {
                        return totalSalary + employee.salary
                    }, 0) / this.employees.length;
                }
            };
        }

        let employee = {
            username: username,
            salary: salary,
            position: position
        };

        depObj.employees.push(employee);
        this.departments.push(depObj)

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        let bestDepartment = this.departments.sort((a, b) => a.avrSalary() - b.avrSalary()).pop();
        
        let str = '';
        str += `Best Department is: ${bestDepartment.name}\n`
        str += `Average salary: ${bestDepartment.avrSalary().toFixed(2)}\n`

        for (const e of bestDepartment.employees.sort((a, b) => a.username.localeCompare(b.username)).sort((a, b) => b.salary - a.salary)) {
            str += `${e.username} ${e.salary} ${e.position}\n`
        }

        return str.trim();
    }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());