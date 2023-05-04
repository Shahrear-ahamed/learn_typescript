type User = {
    name: string;
    age: number;
}

type extendUser = User & {
    role: string
}

// type alias
type sumType = (num1: number, num2: number) => number

// interface
interface ISumType {
    (num1: number, num2: number): number
}

const sumCount: sumType = (num1, num2) => num1 + num2;


type rollNumbersType = number[]

interface IRollNumberType {
    [index: number]: number
}

const rollNumbers: rollNumbersType = [1, 2, 3,]

interface IUser {
    name: string;
    age: number;
}

interface iExtend extends IUser {
    role: string
}