function add(a, b) {

    if (a > b) {
        const sum = 20 + a + b;
        var c = 2000;
    }
    else {
        const sum = 10 + a + b;
        var current = sum;
    }
    console.log('var sum ' + current) //var sum 21
    return a + b
}
console.log(add(4, 7)) // 11
