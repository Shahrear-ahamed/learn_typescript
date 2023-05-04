interface genericInterface {
    name: string,
    age: number
}

function meAndCrush<T extends genericInterface>(myInfo: T) {
    const crush = "Janina";
    return {crush, ...myInfo}
}

const newData1 = meAndCrush({
    name: "Shahrear",
    age: 23
})

// part 2

interface Person {
    name: string;
    age: number;
    salary: number
}

type newType = keyof Person

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key]
}