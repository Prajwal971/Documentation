class Animal {  
  
    // Contructor  
    constructor(name, breed, age){ 
        this.n = name; 
        this.b = breed; 
        this.a = age; 
    } 
  
    // Function 
    incr_Age(){ 
        this.a -= 1; 
    } 
} 
const tomy = new Animal("DOG", "Desi", 13) 
      
tomy.incr_Age(); 
      
console.log(tomy.a)
