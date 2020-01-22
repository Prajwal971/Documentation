// --------------------------------------Sync----------------------------------------

// function abc()
// {
//    console.log('abc');
// }


// function xyz()
// {
//    abc()
//    console.log('xyz');
// }
// var one = 1;
// xyz();

// --------------------------------------Async----------------------------------------
function resolveAfter2Seconds() {
    return new Promise(resolve => { //Promises are used to handle asynchronous operations in JavaScript. Crea
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  async function asyncCall() {//Async is the extension of promises which we get as a support in the language.
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
  }
  asyncCall();//ensures that it returnes a promise.
  