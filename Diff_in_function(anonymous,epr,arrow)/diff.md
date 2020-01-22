# Difference between arrow function,function epression and anonymous function.

In __function expression__ The function keyword is used to define a function inside an expression. wheareas An __anonymous function__ is a function that was declared without any named identifier to refer to it. and an __arrrow function__ is an aletrnative to regular function expression,and they cannot be used as constructors.
\
\
__Syntax__:(function expression)
\
var myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
    \
&nbsp;&nbsp;&nbsp;&nbsp;   statements
   \
};
\
__Example__ for function expression:
\
&nbsp;&nbsp;&nbsp;&nbsp;const getRectArea = function(width, height) {
    \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return width * height;
  \
&nbsp;&nbsp;&nbsp;&nbsp;}
\
&nbsp;&nbsp;&nbsp;&nbsp;console.log(getRectArea(3,4));
----------------------------------------------------------------------------------------------------------
__Syntax__(arrrow function):
\
equivalent to: => { return expression; }
\
__Example__
\
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];


console.log(materials.map(material => material.length));

__Example__
\
(var myFunction = function() {
    statements
})