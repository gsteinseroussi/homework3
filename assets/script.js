// Assignment Code
const generateBtn = document.querySelector("#generate");

//Defined characters as strings and then converted to arrays.
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specials = "!@#$%^&*";
const specialArray = specials.split("");
const lowerCaseArray = lowerCase.split("");
const upperCaseArray = upperCase.split("");
const numberArray = numbers.split("");
let PASSWORD = [];
let arrayOfArrays = [];

function generatePassword() {
  //this will ask how long the password should be
  const passwordLength = prompt(
    "How many characters do you want your password? Please pick a number between 8 and 128."
  );
  //as long as the number given is between 8 and 128, as requested, the following code will run to ask about the password's requirements
  if (passwordLength > 7 && passwordLength < 128) {
    //these prompts will ask if your password requires certain characters and if it does, it will add them to the array of options
    function upperCaseConfirm() {
      if (confirm("Does your password require upper case letters?")) {
        arrayOfArrays.push(upperCaseArray);
      }
      console.log(arrayOfArrays);
    }
    upperCaseConfirm();
    function lowerCaseConfirm() {
      if (confirm("Does your password require lower case letters?")) {
        arrayOfArrays.push(lowerCaseArray);
      }
      console.log(arrayOfArrays);
    }
    lowerCaseConfirm();
    function numbersConfirm() {
      if (confirm("Does your password require numbers?")) {
        arrayOfArrays.push(numberArray);
      }
      console.log(arrayOfArrays);
    }
    numbersConfirm();
    function specialChaConfirm() {
      if (confirm("Does your password require special characters?")) {
        arrayOfArrays.push(specialArray);
      }
      console.log(arrayOfArrays);
    }
    specialChaConfirm();
    console.log(arrayOfArrays.length);
    //for each character of the password, it needs to randomly select the type of character (number, lower case, etc.) and then select the character itself
    for (let i = 0; i < passwordLength; i++) {
      console.log(passwordLength, "password length");
      let randomType = Math.floor(Math.random() * arrayOfArrays.length);
      console.log(randomType, "which category the character will be");
      console.log(arrayOfArrays[randomType]);
      let passwordCharacter =
        arrayOfArrays[randomType][
          Math.floor(Math.random() * arrayOfArrays[randomType].length)
        ];
      console.log(passwordCharacter, "the character chosen");
      PASSWORD.push(passwordCharacter);
    }
    console.log(PASSWORD, "final password");
  }
  //if the user requested a number of characters outside of the parameters, it will inform the user and not produce a password
  else {
    alert("I'm sorry, please choose a different number within our criteria");
  }
}

// This will print the completed password in the text box
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = PASSWORD.join("");
}

// This cues the program to start when the button is clicked
generateBtn.addEventListener("click", writePassword);
