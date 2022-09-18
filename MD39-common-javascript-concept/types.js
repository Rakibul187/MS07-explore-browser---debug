/* 
strongly typed language
int a = 5 ;
string b = 'alim hali, khal;im';
bool c = true ;
object student = {name:'rahim', id: 555}
int[] number s= [12, 55, 88]
*/
// dynamic type language:
const a = 5;
const b = 'samsu ekhon kopay na';
const d = true;
const ages = [35, 77, 99];
const student = { name: 'rakib', id: 44 };
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student) 

let x = 5;
let y = x;
y = 7;
console.log(x, y)

// non -primitive
let p = { job: 'web development' }
let q = p;
q.job = 'front end developer'
console.log(p, q)
