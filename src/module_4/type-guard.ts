type AlphaNumericType = string | number

function addTypeGuard(param1: AlphaNumericType, param2: AlphaNumericType): AlphaNumericType {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2
    } else {
        return param1.toString() + param2.toString()
    }
}

type NormalUserType = {
    name: string
}
type AdminUserType = {
    name: string;
    role: "admin"
}

function getUser(user: NormalUserType | AdminUserType): string {
    if ("role" in user) {
        return `Yes! you're the admin`
    } else {
        return "OH! You're not admin"
    }
}

const normalUser1: NormalUserType = {name: 'shahrear ahamed'}
const adminUser1: AdminUserType = {name: 'shahrear ahamed', role: "admin"}

// console.log(getUser(normalUser1))
// console.log(getUser(adminUser1))

class Animal {
    name: string;
    species: string

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species
    }

    makeSound() {
        console.log("this is making sound")
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeBarking() {
        console.log("dog is barking")
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeMew() {
        console.log("cat is meawing")
    }
}

function getAnimal(animal: Animal) {
    if (animal instanceof Dog) {
        animal.makeBarking()
    } else if (animal instanceof Cat) {
        animal.makeMew()
    } else {
        animal.makeSound()
    }
}


const dogInstance: Dog = new Dog("German dog", "dog")
const catInstance: Cat = new Cat("Deshi Cat", "cat")

getAnimal(catInstance)
