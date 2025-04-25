
const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    const data = await response.json();
    return data
}

const test = getTodos()

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