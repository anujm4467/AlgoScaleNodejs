const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the string ? ", answer => {
  //console.log(isMagic(answer));
  if (isMagic(answer)) console.log("Magic Number");
  else {
    console.log("Not a magic Number");
  }
  rl.close();
});

function isMagic(n) {
  let sumAll = 0;
  while (n > 0 || sumAll > 9) {
    if (n === 0) {
      n = sumAll;
      sumAll = 0;
    }
    sumAll += parseInt(n) % 10;
    n = parseInt(n) / 10;
  }
  //console.log(sumAll);
  return sumAll === 1;
}
