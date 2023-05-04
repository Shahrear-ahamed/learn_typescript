const testOne = (n1: number, n2: number): number => n1 + n2;

const genericArray = <X, Y>(param: X, param2: Y): [X, Y] => [param, param2]

genericArray<string, number>("Tarif", 22)
genericArray<{ name: string }, Array<number>>({name: "Tarif"}, [22, 23])


function meAndCrush<T>(myInfo: T) {
    const crush = "Janina";
    return {crush, ...myInfo}
}

const fullInfo = {
    name: "Shahrear",
    age: 23
}

const newData = meAndCrush(fullInfo)