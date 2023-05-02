const age: number = 22

const isAdult = age >= 18 ? "Yes" : "No"

const isAuthonticate = null

const userMode = isAuthonticate ?? "Guest"

type manush = {
    name: string
    age: number
    married?: boolean
}
const manush1: manush = {
    name: "Shahrear ahamed",
    age: 23,
    married: false
}

const manushAge = manush1?.age;

