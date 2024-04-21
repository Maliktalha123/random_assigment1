// Q#1
let input = prompt("Enter the numbers with a space like 1 2 3 4");
let numbersInArray = input.split(" ");
let firstQuestionArray = [];
for (let i = 0; i < numbersInArray.length; i++) {
  if (numbersInArray[i] % 2 === 0) {
    firstQuestionArray.push(numbersInArray[i] * 2);
  }
}
numbersInArray = firstQuestionArray;
console.log("Result Array:", firstQuestionArray);
// // Q2
let userPassword = prompt("Enter here a password");

let letters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";

let lettersHere = false;
let numbersHere = false;
let userLenght = false;

if (userPassword.length > 6) {
  userLenght = true;
}
for (let i = 0; i < letters.length; i++) {
  if (letters.indexOf(userPassword[i]) !== -1) lettersHere = true;
}
if (numbers.indexOf(userPassword[i]) !== -1) numbersHere = true;

if (userLenght && lettersHere && numbersHere == true) {
  alert("Password is OK");
} else {
  alert("For character codes of a-z,& 0 and length must be 5 above");
}

// Q#3
let firstInputNumbers = prompt(
  "1st input : Enter here numbers with a space like 1 2 3 9 0"
);
let secondInputNumbers = prompt(
  "2nd input : Enter here numbers with a space like 1 2 3 9 0"
);
let firstInputInArray = firstInputNumbers.split(" ");
let secondInputInArray = secondInputNumbers.split(" ");

let commonElements = [];

for (let i = 0; i < firstInputInArray.length; i++) {
  for (let j = 0; j < secondInputInArray.length; j++) {
    if (firstInputInArray[i] === secondInputInArray[j]) {
      commonElements.push(firstInputInArray[i]);
      break;
    }
  }
}

console.log("Common elements:", commonElements);

// Q#4

// Q#5

let firstArray = prompt("Enter here the numbers with a space like 1 2 3 4");
let secondArray = prompt("Enter here the numbers with a space like 1 2 3 4");
let arr1 = firstArray.split(" ");
let arr2 = secondArray.split(" ");

let CombinedArray = [];

for (let i = 0; i < arr1.length; i++) {
  CombinedArray.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
  CombinedArray.push(arr2[i]);
}
console.log("Combined array:", CombinedArray);
