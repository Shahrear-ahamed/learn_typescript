interface IGenericPerson<T, U = null> {
    name: string;
    age: T;
    married: U;
}

interface anotherInterface {
    name: string;
    age: number;
}

const newUser: IGenericPerson<number, anotherInterface> = {
    name: "Shahrear",
    age: 22,
    married: {
        name: "Wife",
        age: 20
    }
}