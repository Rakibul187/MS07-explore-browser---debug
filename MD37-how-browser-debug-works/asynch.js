console.log(1)
console.log(2)
const timeoutId = setTimeout(() => {
    console.log(3)
}, 1000)
console.log(4)
console.log(5)
clearTimeout(timeoutId)
