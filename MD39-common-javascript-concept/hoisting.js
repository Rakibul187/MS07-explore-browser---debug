print5()   // from function inside 5
print10()    // Cannot access 'print10' before initialization
for (var i = 0; i < 5; i++) {
    console.log(i)  //0 1 2 3 4 
}
console.log('hoisting from  outsite the block', i)  // 5

function print5() { console.log('from function inside', 5) }

const print10 = () => { console.log('from variable function', 10) }