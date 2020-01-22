var obj = {name:"Prajwal"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

var args = ["Cronies","Hebbal","Bangalore within karnataka"];  
console.log("Output using .apply() below ")
console.log(greeting.apply(obj,args));