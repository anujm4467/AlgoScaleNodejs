const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please Enter the number ", answer => {
  if (answer % 3 === 0) {
    console.log("I Like Coffee");
  } else if (answer % 5 === 0) {
    console.log("I Like Tea");
  } else if (answer % 3 === 0 && answer % 5 === 0) {
    console.log("I Like both");
  } else {
    console.log("Pleade Enter Integer Number 3 And 5 Only ");
  }
  rl.close();
});
