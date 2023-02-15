function Car(carName) {
    this.carName = carName || 'Unknown name';
}

Car.prototype.logName = function() {
    console.log('Car name is: ', this.carName);
}

global.Car = Car;