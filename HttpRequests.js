const getTodos = (callback) => {//can be called anything
    //we will be doing api requests 
    //and GET back some json data
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //.then(response => response.json()) // convert the response to json
    //.then(json => console.log(json)) // log the json data to the console
    const request = new XMLHttpRequest(); // create a new XMLHttpRequest object

    request.addEventListener('readystatechange', () =>{
        //console.log(request, request.readyState); // log the current state of the request
        if(request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText); // log the response text when the request is complete
            callback(undefined, request.responseText); // call the callback function with two parameters(err as undefined, data)
        }else if (request.readyState === 4){
            // console.log('could not fetch data'); // log an error message if the request fails
            callback('could not fetch data', undefined);//calls the callbak function with two parameters(err, data as undefined)
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // open a GET request to the specified URL
    request.send(); // send the request
}
getTodos((err, data) =>{//We'll put the error and data received as parameters
    console.log('callback fired');
    if(err) {
        console.log(err)
    }else{
        console.log(data)
    }
}); // call the function to make the request
