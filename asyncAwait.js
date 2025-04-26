
const getTodos = async () => {
    const response = await fetch('todos/luigi.json');//but in case of typo the fetch doesn't reject
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