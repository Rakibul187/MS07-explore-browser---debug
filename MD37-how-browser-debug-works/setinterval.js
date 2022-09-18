console.log(2)
let seconds = 0;
const intervalId = setInterval(() => {
    console.log(++seconds)
    if (seconds === 5) {
        clearInterval(intervalId)
    }
}, 500);
console.log(4)

