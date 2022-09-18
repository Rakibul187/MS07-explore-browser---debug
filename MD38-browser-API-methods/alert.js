const showAlert = () => {     /// alert box
    const num = Math.random() * 10;
    if (num < 5) {
        alert('I am less than five')
    }
}
const askSomething = () => {    ///confirm box
    const dicision = confirm('Are You Coming to The Picnic?')
    if (dicision === true) {
        alert('dost 500tk nia asis')
    }
    else {
        console.log('DGM: dure giya mor')
    }
}
const getInfo = () => {       ///promt box
    const name = prompt('What is Your Name?')
    if (!!name) {
        console.log('Welcome Mr. ' + name)
    }
}   