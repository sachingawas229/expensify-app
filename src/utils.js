console.log('utils.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b ;
// exports - default exports - named exports



const subtract = (a, b) => a - b;

export{ square, add , subtract as default };