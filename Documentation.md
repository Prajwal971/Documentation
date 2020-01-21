[begin_with_markDownMD](https://commonmark.org/help/)
# Unique or Distinct value using map
**Finding the unique or distinct set of parameters using [...new(set(ayyay_list))] which resuts in non repeated numbers.**
[map_distinct](https://codeburst.io/javascript-array-distinct-5edc93501dc4)


# ----------------------------------------------------------------------
# Prototype in Javascript
**Prototype is an object where we can attach method and properties which allows rest of the method to inherit these method.**
[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)             |
[JS_demo](http://localhost:8080/chronics_work/Documentation/JS_Prototype.js)        |
[actual_link](https://www.geeksforgeeks.org/prototype-in-javascript/)               |


# ----------------------------------------------------------------------
# Destructuring , ObjectDestructuring
**Destructuring allows us to unpack values from Array or properties from array into distinct or unique variables.**

[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)             |
[JS_demo](http://localhost:8080/chronics_work/Documentation/JS_Prototype.js)        |
[actual_link](https://www.geeksforgeeks.org/prototype-in-javascript/)               |
[desctrcturing_MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

# ----------------------------------------------------------------------
# This
**This keyword in JS is silghtly different compared to other languages because the value is determined by how a funtion is being called.
It cannot be assigned during execution and varies during execution called.**
# __call__ takes the parameter as one by one and __apply__ takes as an aray together. both are used to invoke methoeds with the specified this context.

[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)         |
[JS_demo](http://localhost:8080/chronics_work/Documentation/This_js.js)         |
[actual_link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

# ----------------------------------------------------------------------
# Closure
also called as nested function where the value of the varible is maintained over thr lexical environmental and remains available for use.
3 scopes for closure
*Local scope
*Outer  Function scope
*Global scope

[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)         |
[JS_demo](http://localhost:8080/chronics_work/Documentation/closure.js)         |
[actual_link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) |

# ----------------------------------------------------------------------
# Chaining in JS
Chaining is way of performing multiple openrations on a single object.
i.e. 
    let a = new a();
    let b = a.setName('nothing').setColor('nocolor').setGender('Male');

[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)         |
[JS_demo](http://localhost:8080/chronics_work/Documentation/Chaining.js)        |
[actual_link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) |

# ----------------------------------------------------------------------
# Classes in JS
Classes are blueprints of objects.
*Named classes and Unnamed class

[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)         |
[JS_demo](http://localhost:8080/chronics_work/Documentation/class_in_ES6.js)    |
[actual_link](https://www.tutorialspoint.com/es6/es6_classes.htm)               |

# ----------------------------------------------------------------------
# Difference b/w arrow function,function expr,
In Arrow function there is no binding of this.
var hello = () => {body}

In function expression the name of the function cam be ommitted compard to function declaration specially used in anonymous.

[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)                         |
[JS_demo](http://localhost:8080/chronics_work/Documentation/arrow_function_&_function_expr.js)  |
[actual_link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)      |

# ----------------------------------------------------------------------
# Fetch Api
Provides an interface for fetching Resource across network.(request and response  objects)
Fetch()
doesnt send cookies,retains promises

# ----------------------------------------------------------------------
# Array
They are list like objects which are has non-contiguous location , various method of traversal and mutation operations can be performed.
[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)             |
[JS_demo](http://localhost:8080/chronics_work/Documentation/array_funct.js)         |
[actual_link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# ----------------------------------------------------------------------
# Hoisting
Keeping all the declartion of the variables to the top of the current scope. the variable and function declarations are put into memory during the compile phase
[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)     |
[JS_demo](http://localhost:8080/chronics_work/Documentation/hositing.js)    |
[actual_link](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)   |

# ----------------------------------------------------------------------
# IIFE(immediately invoked function epression)
IIFE reduced the risk of polluting the global scope and conflict between the JS codes.Evn if it has the same fucntion name.
[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)     |
[JS_demo](http://localhost:8080/chronics_work/Documentation/iife.js)        |
[actual_link](https://www.tutorialsteacher.com/javascript/          immediately-invoked-function-expression-iife)

# ----------------------------------------------------------------------
# Cookies,sessions and local storage
__cookies__ are the small files on uses machine which contains data specific to the user and website.The information is stored to make the next vist and enable custimized chmages .Also a easy way to carry information from one session to another.They help the server to remember information when the connection is lost .
creating:   document.cookie = "####";
reading :   let cookie_var = document.cookie;
A cookie can be created by providing a expiry date.
__localStorage__ which is used to store information in the form of key value pair without expiry.Data is not sent back to the server.There is no auto expiry to local storage it can stored for secs to years.It is raed only.
Syntax is similar like sessions but the only difference is instaed of sessionStorage its localStorage.
__Session__ data are available as per window and lost after the window is closed or data stored for temporary purpose and deleted when the window is closed.
Syntax:     window.sessionStorage
            Stored in the form of key value pair.
Setting:    sessionStorage.setItem("Key","Value") 
retrieving: sessionStorage.getItem("key");
removing:   sessionStorage.removeItem("key");
ClearAll:   sessionStorage.clear();


[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)                     |
[JS_demo](http://localhost:8080/chronics_work/Documentation/StoRageS.js)                    |
[actual_link](https://medium.com/datadriveninvestor/cookies-vs-local-storage-2f3732c7d977)  |


# ----------------------------------------------------------------------
# Promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation.Its also a returned object to wch callbacks can be attached.
__for EX:__

function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
__Using Promise it can be written as__
_createAudioFileAsync(audioSettings).then(successCallback, failureCallback);_ 
__OR__
const promise = createAudioFileAsync(audioSettings); 
promise.then(successCallback, failureCallback);

other important thing about promise  is taht we can do chaining 
i.e.
.then.#.#.#.#.#.#.#.
let demoPromise = demoFucnt().then(success).thn(failure)

# 3states are
## pending:-starting stage
## Fullfilled:-only if operation is successfully
## rejected:-if operation is not satisfied.
[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)|


# ----------------------------------------------------------------------
# CallBAck
A function whch is passed as a parameter in another function .
Callbacks that are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks.
[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)         |
[JS_demo](http://localhost:8080/chronics_work/Documentation/callBack.js)        |
[link](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)     |


# ----------------------------------------------------------------------
# Event Bubbling and Capturing
Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.
With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
## __Ex__
var doesItBubble = event.bubbles;

With capturing, the event is first captured by the outermost element and propagated to the inner elements.
## __Ex__
<div>
    <ul>
        <li></li>
    </ul>
</div>

In the above example acording to capturing 1st the <div> will handled thne <ul> and finaly the<li> wil be handled.But in case of bubbling 1st <li> , <ul> and finally the <div> will be executed.
[link](https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing)|
[link](https://medium.com/@vsvaibhav2016/                   event-bubbling-and-event-capturing-in-javascript-6ff38bec30e)|

# ----------------------------------------------------------------------
# CORS
Enables scripts running on a browser client to interact with resources from a different origin.JavaScript can only make calls to URLs that live on the same origin as the location where the script is running. 
It is also a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.
CORS failures result in errors, but for security reasons, specifics about the error are not available to JavaScript. All the code knows is that an error occurred. The only way to determine what specifically went wrong is to look at the browser's console for details.
[link](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)              |

# ----------------------------------------------------------------------
# SetInterval setTimeout clearInterval clearTimeout.
The setIntervl method repeatedly calls a function  with a fixed time delay between each call. It returns an interval ID which uniquely identifies the interval.
The interval is usually in millisecs = 1000ms = 1sec.

The setTomeout method calls a function or evaluates an expression after a specified number of milliseconds.

The clearInterval() method clears a timer set with the setInterval() method.

The clearTimeout() method clears a timer set with the setTimeout() method.

[link](http://localhost:8080/chronics_work/Documentation/Interval.html)         |

# ----------------------------------------------------------------------
# Async and sync.
Two or more things are synchronous when they happen at the same time (in sync), and asynchronous when they don’t (not in sync).

Javascript  is synchronous execution and executes command one @ a timr .i.e line by line is getting executed.

JavaScript is only asynchronous in the sense that it can make, for example, Ajax calls.
__Async__ fucntions will always return  a value.Is makes sure that promise is returned ...if not retirned it will wrap the value in a promise.

[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)         |
[JS_demo](http://localhost:8080/chronics_work/Documentation/Sync_Async.js)      |
[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

# ----------------------------------------------------------------------
# Async [await]
The __await__ function causes the asyns function to pause until a promise is rejected or fullifilled.If the Promise is rejected, the await expression throws the rejected value.An await can split execution flow, allowing the caller of the await's function to resume execution before the deferred continuation of the await's function.

[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)         |
[JS_demo](http://localhost:8080/chronics_work/Documentation/await.js)           |
[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

# ----------------------------------------------------------------------
# Modules
 __Modules__ are small units of independent, reusable code that is desired to be used as the building blocks . _modules in other lanuages act as class._
  A module can be exported using the keyword __module.exports__
  and can be imported using the keyword __require(module_path or module_filename)__

[html_demo](http://localhost:8080/chronics_work/Documentation/ALL.html)         |
[JS_demo](http://localhost:8080/chronics_work/Documentation/module_export.js)   |
[JS_demo](http://localhost:8080/chronics_work/Documentation/module_importt.js)  |
[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)(https://www.geeksforgeeks.org/javascript-importing-and-exporting-modules/)
  




**demo**


## hai
### hai
#### hai
##### hai
