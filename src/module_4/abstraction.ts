// Interface
interface IVehicle {
    methodOne(): void;

    methodTwo(): void
}

class VehicleClass implements IVehicle {
    constructor(name: string, brand: string, model: string) {
    }

    methodOne() {
        console.log("This is  class abstraction")
    }

    methodTwo() {
        console.log("This is  class abstraction")
    }

    methodOwn() {
        console.log("this is own method of this class")
    }
}

const vechicleInstance = new VehicleClass("BMW", "BMW", "2022")

// Abstract Class
abstract class Vechicle {
    constructor(name: string, brand: string, model: string) {
    }

    abstract methodOne(): void

    methodTwo() {
        console.log("This is method three")
    }
}

class Car extends Vechicle {
    methodOne() {
        console.log("This is under car class")
    }

    methodTwo() {
        console.log("This is another method")
    }

    methodThree() {
        console.log("This is another method")
    }
}

const toyota = new Car("Toyota", "Toyota", "2023")
toyota.methodOne()
toyota.methodThree()