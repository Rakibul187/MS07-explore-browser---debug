/* 
truthy value:
1. true
2. any number without o will thruthy
3.any string ''/'rahim'/'100'/'0/'false' ohter than empty string ' '.empty means have space inside quetation
4.  empty object/array truthy : const hasnat={}/[]
5. truthy checking: const z = ' '; if(!!z){console.log('z is truthy')} // z is thruthy
here !!z means z thruthy. !!somehting thruthy checker . thruthy hoile condition true code execute hobe

falsy:
1. false
2. 0
3. '' (empty string)
4. null
5. checking falsy:
const y=null;
 if (!y){console.log('x is falsy')} //x is falsy
 here !y means y falsy. !something falsy checker. y falsy hole !y er vitore dhukbe & code exucute hobe.
*/
const x = true;
const b = '';
if (!!x) {
    console.log('x is truthy value') // x is truthy value
}
else {
    console.log('x is falsy value')
}
if (!b) {
    console.log('b is falsy') // b is falsy
}