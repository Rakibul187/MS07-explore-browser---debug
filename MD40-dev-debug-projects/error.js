// 1. syntax error.........
/* console.log(5;      //SyntaxError: missing ) after argument list
cont y = 9;            //SyntaxError: Unexpected identifier */

// 2.  type error
/* let address;
console.log(typeof address)    //undefingited
console.log(address)    //undefined
console.log(address.length)   //TypeError: Cannot read properties of undefined (reading 'length')
const people = 5;
console.log(people()) //TypeError: people is not a function */

//3. type error (scope er baire theke access korte caile: if,else, function, loop etc)
function add(a, b) {
    const result = a + b;
    return result;
}
// console.log(result)   //ReferenceError: result is not defined

const persons = {
    name: 'moin ali'
}
persons.map(a => console.log(a))   //TypeError: persons.map is not a function