// Assignment Code
const generateBtn = document.querySelector("#generate");

//Defined characters as strings and then converted to arrays.
const lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const lowerCaseArray = lowerCase.split(" ");
const upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
const upperCaseArray = upperCase.split(" ");
const numbers = "0 1 2 3 4 5 6 7 8 9";
const numberArray = numbers.split(" ");
const specials = "! @ # $ % ^ & *";
const specialArray = specials.split(" ");

const passwordLength = prompt(
  "How many characters do you want your password? Please pick a number between 8 and 128."
);
const upperCaseConfirm = confirm(
  "Does your password require upper case letters?"
);
const lowerCaseConfirm = confirm(
  "Does your password require lower case letters?"
);
const numbersConfirm = confirm("Does your password require numbers?");
const specialChaConfirm = confirm(
  "Does your password require special characters?"
);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.length = passwordLength;

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
