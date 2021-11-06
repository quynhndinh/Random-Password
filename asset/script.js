// DATA
var genPassIDBtn = document.getElementById("generate");
var genPassQSBtn = document.querySelector("#generate");

var specialChars = "~!@#$%^&*()-=_+" .split('');
var upperchars ="QWERTYUIOPASDFGHJKLZXCVBNM" .split('');
var lowerchars ="qwertyuiopasdfghjklzxcvbnm" .split('');
var numberschars = "1234567890" .split('');
var userChoices = "";
// var special = specialChars(window.confirm("Would you like to use special characters?"));
// var upper = upperchars(window.confirm("Would you like upper case letters?"));
// var lower  = lowerchars(window.confirm("Would you like lower case letters?"));

console.log(specialChars);
console.log(upperchars);
console.log(lowerchars);
console.log(numberschars);

function generatePassword(){
  var length = prompt("How many Characters would you like your password to be? (min:8 max: 128")
    if (length < 8 || length > 128) {
    window.alert("Invalid option min:8 max: 128")
    return generatePassword();
    }

  var specialQuestion = confirm("Would you like to use special charaters?");
  var upperQuestion = confirm("Would you like to use uppercase charaters?");
  var lowerQuestion = confirm("Would you like to use lowercase charaters?");
  var numQuestion = confirm("Would you like to use numbers charaters?");

  var userChoices

    if (specialQuestion = true) {
      userChoices += specialChars
    }
    if (upperQuestion = true) {
      userChoices += upperchars
    }
    if (lowerQuestion = true) {
      userChoices += lowerchars
    }
    if (numQuestion = true){
      userChoices += numberschars
    }
    
  if (specialQuestion && upperQuestion &&  lowerQuestion && numQuestion) {
    var password = ""

    for (var i = 0; i < length; i++){            
      password = password + userChoices[Math.floor(Math.random()* userChoices.length)]
      console.log(password)
    }
    return password;

  } else { 
      window.alert("Must choose one");  
      return generatePassword(); 
    }
    
  
}

// MAIN PROCESS
function writePassword() {
  var password = generatePassword();
  var passwordTextEL = document.getElementById("password")

  passwordTextEL.value = password;

  return;
}

genPassIDBtn.addEventListener("click", writePassword);