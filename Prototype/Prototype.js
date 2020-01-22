// function Animals(breed,age,color){
//     this.breed = breed;
//     this.age = age;
//     this.color = color;
// }
// console.log(Animals.prototype);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// function Animals(breed,age,color){
//     this.breed = breed;
//     this.age = age;
//     this.color = color;
// }
// let d = new Date()
// let n = d.getFullYear();

// Animals.prototype.calculateAge = function(){
//     console.log('The Current AGe  '+d - this.age);
// }
// console.log(Animals.prototype);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

function Animals(breed,age,color){
    this.breed = breed;
    this.age = age;
    this.color = color;
}
let d = new Date()
let n = d.getFullYear();

Animals.prototype.calculateAge = function(){
    console.log("The Current AGe___:"+(n - this.age));
    console.log("Demo age to display___:"+this.age);
    console.log("Demo age to display___:"+n);
}
console.log("Demo age to display after funct___:"+this.age);
console.log(Animals.prototype);

let Animals_Jocky = new Animals("Semi hyBrid",2009,"golden");
console.log("Displaying the 1st object",Animals_Jocky)

let Animals_Tiger = new Animals("Gernam_pomenian",2018,"golden");
console.log("Displaying the 2nd object",Animals_Tiger)

Animals_Jocky.calculateAge();
Animals_Tiger.calculateAge();

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------