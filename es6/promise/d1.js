
let p = new Promise((resolve, reject) => {
    console.log("1")
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            resolve("success")
        } else {
            reject("failed")
        }
    }, 2000)

})


p.then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})

console.log("after p")