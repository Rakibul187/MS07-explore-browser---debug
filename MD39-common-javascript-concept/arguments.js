function sum(a, b, c) {
    // console.log(arguments) //[Arguments] { '0': 45, '1': 89, '2': 12, '3': 45, '4': 98, '5': 56 }
    // console.log(arguments[3])
    const args = [...arguments]
    console.log(args) //[ 45, 89, 12, 45, 98, 56 ]
    const total = a + b + c;
    return total;
}
console.log(sum(45, 89, 12, 45, 98, 56))
console.log(sum.length) //3 what parameter length