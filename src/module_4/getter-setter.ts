class Account {
    id: number;
    name: string;
    _balance: number

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance
    }

    get balance(): number {
        return this._balance
    }

    set addBalance(amount: number) {
        this._balance = this._balance + amount
    }
}

const amarAccount = new Account(199, "Shahrear ahamed", 20)

console.log(amarAccount.balance)
console.log(amarAccount.addBalance = 30)