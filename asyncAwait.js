//basically the async function can return a bunch of promises
//and they can later be called for resolution or rejection
//async function will always return a promise
//and the await keyword can only be used inside an async function
//the await keyword will pause the execution of the async function until the promise is resolved or rejected
const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    //but in case of typo in the link the fetch doesn't reject
    //instead will give a status of 404 so we will check the status
    //and explicitely throw an error using the throw method
    if (response.status !== 200){//if the response's status is not OK then
        throw new Error('Cannot fetch data')
    }
    const data = await response.json();
    return data
}

getTodos()
    .then(data => console.log('resolved: ', data))
    .catch(err => console.log('rejected: ', err))

// const test = getTodos();//this will be a new promise
// console.log(test)

// fetch('todos/luigi.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch((err) => {
//     console.log('rejected',err)
// });