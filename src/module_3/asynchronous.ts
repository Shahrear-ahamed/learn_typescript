const promiseString = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "This is promise string type data";
        if (data) {
            resolve(data)
        } else {
            reject("This is an error")
        }
    })
}

const promiseResult = async (): Promise<string> => {
    return await promiseString()
}