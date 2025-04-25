const getTodos = (resource, callback) => {//'callback' can be called anything
    const request = new XMLHttpRequest(); // create a new XMLHttpRequest object

    request.addEventListener('readystatechange', () =>{
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data); 
        }else if (request.readyState === 4){
            callback('could not fetch data', undefined);//calls the callbak function with two parameters(err, data as undefined)
        }
    });

    
    request.open('GET', resource);
    request.send(); 
}
//the long way of doing it
//callback hell
//the rest is in promises.js
getTodos('todos/luigi.json',(err, data) =>{
    console.log(data);
    getTodos('todos/mario.json',(err, data) =>{
        console.log(data);
        getTodos('todos/shawn.json',(err, data) =>{
            console.log(data);
        })
    })
}); 