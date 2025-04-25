//the Sync part
console.log("1");
console.log("2");
//this part will be printed at the end
setTimeout(() => {
    console.log('Callback fired')
}, 1000);

console.log("3");
console.log("4");