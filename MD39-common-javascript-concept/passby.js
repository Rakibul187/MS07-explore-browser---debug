// promitive are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 27;
    const result = a * b;
    return result
}
console.log(num1) //5
const output = multiply(num1, num2);
console.log(output) //189
console.log(num1) //5

// non primitive are pass by reference
const student1 = { name: 'jalil', partner: 'borsha' };
const student2 = { name: 'raj', partner: 'anika' }
function makeMovie(couple1, couple2) {
    couple1.name = 'ononto'
    couple2.partner = 'mim'
}
console.log(student1, student2) //{ name: 'jalil', partner: 'borsha' } { name: 'raj', partner: 'anika' }
makeMovie(student1, student2)
console.log(student1, student2) //{ name: 'ononto', partner: 'borsha' } { name: 'raj', partner: 'mim' }