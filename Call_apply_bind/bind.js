var obj = {name:"Prajwal"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

var bound = greeting.bind(obj); 

console.dir(bound); ///returns a function

console.log("Output using .bind() below ");

console.log(bound("Cronies","Hebbal","Bangalore within karnataka"));