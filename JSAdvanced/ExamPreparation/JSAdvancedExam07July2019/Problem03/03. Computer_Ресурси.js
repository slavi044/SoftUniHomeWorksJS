class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory,
            this.cpuGHz = cpuGHz,
            this.hddMemory = hddMemory,
            this.taskManager = [],
            this.installedPrograms = []
    }

    installAProgram(name, requiredSpace) {
        if (this.hddMemory < requiredSpace) {
            throw new Error('There is not enough space on the hard drive')
        }

        let program = {
            name: name,
            requiredSpace: requiredSpace
        };

        let foundProgram = this.installedPrograms.find(p => p.name === name);

        if (!foundProgram) {
            this.installedPrograms.push(program);

            this.hddMemory -= requiredSpace;
        }

        return program;
    };

    uninstallAProgram(name) {
        let program = this.installedPrograms.find((p) => p.name === name);

        if (!program) {
            throw new Error('Control panel is not responding')
        }

        let indexOfProgram = this.installedPrograms.indexOf(program);
        this.installedPrograms.splice(indexOfProgram, 1);

        this.hddMemory += program.requiredSpace;

        return this.installedPrograms;
    }

    openAProgram(name) {
        let program = this.installedPrograms.find((p) => p.name === name);

        if (!program) {
            throw new Error(`The ${name} is not recognized`);
        }

        let isAllreadyOpen = this.taskManager.find((p) => p.name === name);

        if (isAllreadyOpen) {
            throw new Error(`The ${name} is already open`);
        }

        let ramMemoryUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        let totalMemoryUsage = this.taskManager.reduce((acc, cur) => acc + cur.ramMemory, 0) + ramMemoryUsage
        let totalCPUUsage = this.taskManager.reduce((acc, cur) => acc + cur.cpuUsage, 0) + cpuUsage

        if (totalMemoryUsage >= 100) {
            throw new Error(`${name} caused out of momory exception`);
        }

        if (totalCPUUsage >= 100) {
            throw new Error(`${name} caused out of cpu exception`);
        }

        let programObj = {
            name: name,
            ramUsage: ramMemoryUsage,
            cpuUsage: cpuUsage
        };

        this.taskManager.push(programObj);

        return programObj;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return "All running smooth so far";
        }

        let output = '';

        for (const p of this.taskManager) {
            output += `Name - ${p.name} | Usage - CPU: ${p.cpuUsage.toFixed(0)}%, RAM: ${p.ramUsage.toFixed(0)}%\n`
        }

        return output.trim();
    }

}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());