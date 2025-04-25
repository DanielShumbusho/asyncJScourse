// //we will be doing api requests 
// // and GET back some json data
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json()) // convert the response to json
//   .then(json => console.log(json)) // log the json data to the console
const request = new XMLHttpRequest(); // create a new XMLHttpRequest object

request.addEventListener('readystatechange', () =>{
    //console.log(request, request.readyState); // log the current state of the request
    if(request.readyState === 4 && request.status === 200) {
        console.log(request.responseText); // log the response text when the request is complete
    }else if (request.readyState === 4){
        console.log('could not fetch data'); // log an error message if the request fails
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/'); // open a GET request to the specified URL
request.send(); // send the request