"use strict";
// normal function
function sum(num1, num2) {
    return num1 + num2;
}
// arrow function
const sumArrow = (num1, num2) => num1 + num2;
const userName = {
    name: "Shahrear ahamed",
    balance: 500,
    addTip(amount) {
        return this.balance + amount;
    }
};
const one = ["a", "b", "c"];
const two = ["d", "e", "f"];
one.push(...two);
const greed = (...friends) => {
    friends.map(fr => console.log(`Hi ${fr}`));
};
greed("q", "s", "k", "g");
