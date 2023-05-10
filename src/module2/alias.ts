// type alice alis
type CrushType = {
    name: string
    age: number
    profession: string
    address: string
}

const crush: CrushType = {
    name: "Crush",
    age: 22,
    profession: "Web development",
    address: "Bangladesh"
}

type CrushJobType = string

type OperationType = (x: number, y: number) => number

const summation: OperationType = (b1, c1) => b1 + c1