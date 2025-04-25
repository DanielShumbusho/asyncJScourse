const getTodos = (resource) => {//'callback' can be called anything

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest(); // create a new XMLHttpRequest object

        request.addEventListener('readystatechange', () =>{
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data) 
            }else if (request.readyState === 4){
                reject('error getting resources');//calls the callbak function with two parameters(err, data as undefined)
            }
        });
    
        
        request.open('GET', resource);
        request.send();  
    });
    
};

getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved', data)
}).catch(err => {
    console.log('promise rejected', err);
})

//promise example
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         //fetch something
//         // resolve ('some data');
//         reject('some error');
//     });
// }
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err)
// });

//a different way
// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });