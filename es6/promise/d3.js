
function getP() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

async function test() {
    console.log("1")
    await getP()
    console.log("##")
    await getP()
    console.log("@@")
}
console.log("2")

test()
console.log("3")