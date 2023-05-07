class Person {
    takeNap() {
        console.log("i sleep total 8 hour")
    }
}

class Students extends Person {
    takeNap() {
        console.log("i sleep total 8 hour")
    }
}

class Developer extends Person {
    takeNap() {
        console.log("i sleep total 8 hour")
    }
}

function getNap(param: Person) {
    param.takeNap()
}

const person1 = new Person()
const person2 = new Students()
const person3 = new Developer()

getNap(person1)
getNap(person2)
getNap(person3)