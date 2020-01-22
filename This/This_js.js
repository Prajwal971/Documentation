// const test = {
//     prop : 42,
//     func : function(){
//         return this.prop;
//     },
// };
// console.log(test.func())

// -------------------------------------------------------

// console.log(this === window)

// a = 37
// console.log(window.a);

// this.b = "MDN";
// console.log(b)
// console.log(window.b)

// ---------------------------------------------------------Non strict mode where the value is not set during the call and may be undofined
// function f1() {
//     return this;
//   }
// //   f1() === window;
  
//   f1() === global;

// console.log(f1())
// ---------------------------------------------------------Strict mode where if the value is not saved,it remains undiefined
// function f2() {
//     'use strict'; 
//     return this;
//   }
  
//   f2() === undefined;
// ------------------------------------------------------------Full Functiipn---------------------------------------
// An object can be passed as the first argument to call or apply and this will be bound to it.
// var obj = {a: 'Custom'};

// // This property is set on the global object
// var a = 'Global';

// function whatsThis() {
//   return this.a;  // The value of this is dependent on how the function is called
// }

// whatsThis();          // 'Global'
// whatsThis.call(obj);  // 'Custom'
// whatsThis.apply(obj); // 'Custom'

// ----------------------------------------------------------
function add(c, d) {
    console.log(this.a)
    console.log(this.b)
    console.log(c)
    console.log(d)
    console.log(this.a + this.b)
    console.log(c + d)
    return console.log(this.a + this.b + c + d,"\n----------------------------------------------------------"); 
    
  }
  
  var o = {a: 1, b: 3};

  add.call(o, 5, 7);//input given as a individual number like 5 , 7
  console.log("---------------------",o.a + o.b,"---------------------")
  console.log("---------------------",o[0] + o[1],"---------------------")
  add.apply(o, [10, 20]);//input given as a array number like [10,20]