type TestOne = {
    name: string;
    age: number
}

type mapping = {
    [index in keyof TestOne]: string
}

type mappingTwo<T> = {
    [key in keyof TestOne]:TestOne[key];
    // [index in keyof T]: T[index]
}

const userMapTest: mappingTwo<TestOne> = {name: "Shahrear", age: 22}
