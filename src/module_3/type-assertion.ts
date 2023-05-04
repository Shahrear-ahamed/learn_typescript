let man: any;

man = "Shahrear";

<string>man.toUpperCase()
    // or
    (man as string).toUpperCase()

function kgToGram(unit: string | number): string | number | undefined {
    if (typeof unit === "string") {
        const value = parseFloat(unit) * 1000
        return `unit value is ${value}`
    }

    if (typeof unit === "number") {
        return unit * 1000
    }
}

const resultNumber = kgToGram(1000) as number;
const resultString = kgToGram("1000") as string;
