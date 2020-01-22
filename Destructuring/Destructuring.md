# Destructuring 
**Destructuring allows us to unpack values from Array or properties from array into distinct or unique variables.**

## Syntax
let a, b, rest;
\
[a, b] = [10, 20];
\
[a, b, ...rest] = [10, 20, 30, 40, 50];
\
console.log(a); // = 10
\
console.log(b); // =  20
\
console.log(rest); // =  [30, 40, 50]

A variable can be assigned its value via destructuring separate from the variable's declaration.
\
A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
\
Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, which helps a lot of time in various situation. Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.
