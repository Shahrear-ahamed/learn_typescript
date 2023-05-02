function throwErr(msg: string):never {
    throw new Error(msg)
}

throwErr("This is a new error")