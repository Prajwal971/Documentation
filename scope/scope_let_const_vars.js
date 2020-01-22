// --------------------------------------let--------------------------------------
let x = 1;

if (x === 1) {
  let x = 2;
  console.log(x);
}
console.log(x);

// --------------------------------------var--------------------------------------
var z = 'global';
let y = 'global';
console.log(this.z); 
console.log(this.y); 
// --------------------------------------Const--------------------------------------
const number = 0.01;
try {
//   number = 99;
} catch(err) {
  console.log(err);
}
console.log(number);