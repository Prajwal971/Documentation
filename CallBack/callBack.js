function greeting(name) {
    alert('Hello ' + name);
}
  
function processUserInput(callbacks) {
    var name = prompt('Please enter your name.');
    callbacks(name);
}
  
processUserInput(greeting);