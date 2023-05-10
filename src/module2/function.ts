// normal function
function sum(num1: number, num2: number): number {
    return num1 + num2
}

// arrow function
const sumArrow =
    (num1: number, num2: number): number => num1 + num2;


const userName: {
    name: string;
    balance: number;
    addTip(amount: number): number
} = {
    name: "Shahrear ahamed",
    balance: 500,
    addTip(amount: number) {
        return this.balance + amount
    }
}

const one: string[] = ["a", "b", "c"]
const two: string[] = ["d", "e", "f"]
one.push(...two)

const greed = (...friends: string[]): void => {
    friends.map(fr => console.log(`Hi ${fr}`));
}

greed("q", "s", "k", "g")