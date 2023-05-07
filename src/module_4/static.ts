class Counter {
    static counter: number

    static increase(): number {
        return Counter.counter = Counter.counter + 1
    }

    static decrease(): number {
        return Counter.counter = Counter.counter - 1
    }
}

console.log(Counter.increase())
console.log(Counter.increase())