# (Immediately Invoked Function Expression)
An IIFE  is a JavaScript function that runs as soon as it is defined.
IIFE contains 2 parts
    -The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.\
    -The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
    \
General Procedure to declare \
    (function () {  \
   &nbsp;&nbsp;&nbsp;&nbsp; statements      \
    })();           
    It is a design pattern which is also known as a Self-Executing Anonymous Function.