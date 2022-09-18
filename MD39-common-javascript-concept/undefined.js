/* 
1. not initialized variable give undefined
2. function with no return give undefined
3. parameter that not pass will be undefined
4. if no declare what will return than output will be undefined
5. property that doesnt exist/dont have that give undefined
6. accessing array elements outsite of the index range will undefined
7. deleted element of array will undefined
8. set a value dirctly to undfined
*/
let a;
console.log(a) //undefined
function add(a, b) { const result = a + b; }
console.log(add(4, 7))  //undefined
function addition(a, b, c, d) { console.log(a, b, c, d) }
console.log(addition(5, 7)) // 5 7 undefined undefined & another undefined for no return
function multiply(a, b) { return }; console.log(multiply(5, 9)) //undefined
const fifth = { id: 4, name: 'ponchom', age: 30 };
console.log(fifth.age, fifth.job) // 30 undefined
const sixth = [12, 44, 66, 88, 99, 56]
delete sixth[3]
console.log(sixth[2], sixth[3], sixth[10]) // 66 undefined undefined
/*
const eighth= undefined;
const ninth=null;
 console.log(typeof eighth)  //undefined
 console.log(typeof ninth) // object
 1. kono ekta value nai explicitly set korte caile null set korte hobe
 */