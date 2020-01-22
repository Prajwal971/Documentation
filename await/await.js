const getData = async() => { 
    var y = await "Demo of await"; 
    console.log(y); 
} 
  
console.log(1); 
getData(); 
console.log(2); 
//1 and 2 is executed and then the "Demo of await" is executed because it is conained in getDate function and it has await keyword which makes it to wait.