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