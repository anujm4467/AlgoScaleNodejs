const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the string ? ", answer => {
  console.log(StringUtil(answer));
  rl.close();
});

const StringUtil = strings => {
  let wordArray = strings.split(" ");
  let reversedString = "";
  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    let reverseWord = "";
    for (let j = word.length - 1; j >= 0; j--) {
      reverseWord = reverseWord + word.charAt(j);
    }
    reversedString = reversedString + reverseWord + " ";
  }
  console.log(reversedString.trim());
};
