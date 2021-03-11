class Parking{
    constructor(capasity){
        this.capasity = capasity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber){
        let numOfCars = this.vehicles.length;
        if (this.capasity <= numOfCars) {
            throw 'Not enough parking space.';
        }

        let car = {
            carModel: carModel,
            carNumber: carNumber,
            payed: false
        };
        this.vehicles.push(car);

        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    pay(carNumber){
        let car = this.findCar(carNumber);

        if (car === undefined){
            throw `${carNumber} is not in the parking lot.`;
        }

        if (car.payed === true) {
            throw `${carNumber}'s driver has already payed his ticket.`;
        }

        car.payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    removeCar(carNumber){
        let car = this.findCar(carNumber);

        if (!car) {
            throw `The car, you're looking for, is not found.`;
        }

        if (car.payed === false) {
            throw `${carNumber} needs to pay before leaving the parking lot.`;
        }

        let carIndex = this.vehicles.indexOf(car);
        this.vehicles.splice(carIndex, 1);

        return `${carNumber} left the parking lot.`;
    }

    getStatistics(carNumber){        
        if (carNumber !== undefined) {
            let car = this.findCar(carNumber);
            return `${car.carModel} == ${car.carNumber} - ${car.payed === true ? 'Has payed' : 'Not payed'}`;
        }

        let emptySlots = this.capasity - this.vehicles.length;
        let output = `The Parking Lot has ${emptySlots} empty spots left.`;

        for (let i = 0; i < this.vehicles.length; i++) {
            let car = this.vehicles[i];
            output +=`\n${car.carModel} == ${car.carNumber} - ${car.payed === true ? 'Has payed' : 'Not payed'}`;
        }

        return output;
    }

    findCar(carNumber){
        return this.vehicles.find(x => x.carNumber === carNumber);
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
