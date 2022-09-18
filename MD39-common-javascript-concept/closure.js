function kitchen() {
    let roast = 0;
    return function () {
        return roast++
    }
}
const firstServer1 = kitchen()
const firstServer2 = kitchen()
const firstServer3 = kitchen()

console.log(firstServer1)  //[Function (anonymous)]
console.log(firstServer1())  //0
console.log(firstServer1())  //1
console.log(firstServer1())  //2
console.log(firstServer1())  //3
console.log(firstServer2())  //0
console.log(firstServer2())  //1
console.log(firstServer2())  //2
console.log(firstServer1())  //4