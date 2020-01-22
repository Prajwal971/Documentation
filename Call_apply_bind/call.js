var obj = {name:"Prajwal"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(obj,"Cronies","Hebbal","Bangalore"));
