function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}

// Function to print multiplication table of a given number
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// Export the function
module.exports = {
  add,
  mul,
  printTable
};