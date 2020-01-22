# CORS

Enables scripts running on a browser client to interact with resources from a different origin.JavaScript can only make calls to URLs that live on the same origin as the location where the script is running. 
It is also a mechanism that uses __additional HTTP headers__ to tell browsers to give a web application running at one origin, access to selected resources from a different origin.
CORS __failures__ result in errors, but for security reasons, specifics about the error are not available to JavaScript. All the code knows is that an error occurred. The only way to determine what specifically went wrong is to look at the __browser's console__ for details.
