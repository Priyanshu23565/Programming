const { add, mul, printTable } = require('./add'); 



const result = add(10, 5);
console.log("Addition Result:", result); // Output: 15

const product = mul(6, 7);
console.log("Multiplication Result:", product); // Output: 42

const number = 9;
console.log(`\nTable of ${number}:`);
printTable(number);
