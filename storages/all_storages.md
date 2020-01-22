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