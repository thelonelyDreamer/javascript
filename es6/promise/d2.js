function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

sleep(2000).then(() => {
    console.log("hello world")
})

console.log("hello")

