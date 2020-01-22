// --------------------------------------------------Sessions----------------------------------------
// data stored for temporary purpose and deleted when the window is closed.
// Syntax
            // window.sessionStorage
    // Stored in key value pair


// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("Session Name", "This is Demo_session");
    // Retrieve
    console.log(sessionStorage.getItem("lastname")); 
    console.log(typeof(Storage))
  } else {
    console.log("Sorry your browser does not support Web Storage...");
  }
// --------------------------------------------------Cookies----------------------------------------
document.cookie = "hai";
console.log(document.cookie)

let rmvdCookie = document.cookie = "hai; expires=Mon, 20 Jan 2020 10:12:00";

var x = document.cookie = "hai";
console.log(rmvdCookie)
// --------------------------------------------------localStorage----------------------------------------
localStorage.setItem("Work","Cronies Solution");
let workname = localStorage.getItem("Work");
console.log(workname)
let rmvd = localStorage.removeItem("Work")
console.log("After Removing",rmvd)

