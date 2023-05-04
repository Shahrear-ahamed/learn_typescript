type a1 = string;

type a2 = a1 extends string ? string : number

type sheikh = {
    wife1: string;
    wife2: string
}

type CheckProperty<T, K> = K extends keyof T ? true : false

type checkWife1 = CheckProperty<sheikh, "wife1">;


type Friend = "nai" | "janina" | "vallage na";
type removeFriend<T, K> = T extends K ? never : T;
type currentFriend = removeFriend<Friend, "nai">
