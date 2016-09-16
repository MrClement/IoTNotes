var readline = require("readline")

var input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printName(name) {
  console.log(name);
}

input.question("What is your name? ", printName);
