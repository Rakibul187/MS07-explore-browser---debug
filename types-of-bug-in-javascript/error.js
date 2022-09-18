//1. syntax error
// console.log(1000}

/* 2. reference error: kono kisu nai tobu access korte caile or speling mistake kore access korte caile ref. error dey 
2.1 function name is not defined
2.2 variable name is not defined
2.3 when want to access not existince anything etc
*/
const navy = 'ryan';
// console.log(navyland) //uncaught reference error navy is not defined

/* 3. type error: kono kisur upre unmatched kisu apply korle
3.1  uncaought : typeerror cannot set properties
3.2  typeerror: "undefined" is not a function
3.3  typerror: cannot read "length" of undefined
3.4  typeerror: cant acces property "length"
under; uncaought typeerror: cannot reade properties of null
*/
const array = { name: 'hero alam', height: 5.4 };
// array.forEach(element => console.log(element));

/* 
4. logical error: jokhon everything thikthak thake but ja execut ekorte cai hoyna logic a vul thake

method to solve:
1. code comment out
2. console.log() kore output dekhe step by step
*/