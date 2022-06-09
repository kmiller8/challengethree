function generatePassword(){

  //call functions to prompt user and store values based on answers
  var passLength = LengthPrompt ();
  
  var passLowercase = lowercasePrompt ();
  
  var passUppercase = uppercasePrompt ();
  
  var passNumber = numberPrompt();
  
  var passSpecial = specialPrompt();
  
  //make sure one of the values is true
  if (
  
  passLowercase === false &&
  passUppercase === false &&
  passNumber === false &&
  passSpecial === false
  ) {
  
    window.alert("Please select at least one character type");
    return null;
  
  }
  
  //pass prompt answers to createPassword function to generate a password
  var genPassword = createPassword (passLength, passLowercase, passUppercase,
    passNumber, passSpecial);
  
  return genPassword;
  
  };
  
  //prompt user for length
  function LengthPrompt() {
  
    lengthBool = window.prompt("Please enter password length (between 8 and 128): ");

    //check to see it is the proper length
    if (lengthBool < 8 || lengthBool > 128){
  
      window.alert("Must be between 8 and 128. Try again");
      LengthPrompt();
  
    }
  
    return lengthBool;
  };
  
  
  //ask user if they want a lowercase
  function lowercasePrompt () {
  
    lowercaseBool = window.confirm ("Would you like to include lowercase letters? OK for yes, Cancel for No: ");
    
    return lowercaseBool;
  
  };
  
  
  //ask user if they want an uppercase
  function uppercasePrompt () {
  
    uppercaseBool = window.confirm ("Would you like to include uppercase letters? OK for yes, Cancel for No: ");
    
    return uppercaseBool;
  
  };
  
  //ask user if they want a number
  function numberPrompt () {
    
    numberBool = window.confirm ("Would you like to include a number? OK for yes, Cancel for No: ");
  
    return numberBool;
  
  };
  
  //ask user if they want a special character
  function specialPrompt () {
  
    specialBool = window.confirm ("Would you like to include a special character? OK for yes, Cancel for No: ");
  
    return specialBool;
  
  };
  
  function createPassword (length, lowercases, uppercases, numbers, specials) {
  
    
    //declare strings to use for password creation
    let lowerStr = "abcdefgfijklmnopqrstuvwxyz";
    let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numStr = "1234567890";
    let specialStr = "!@#$%^&*()_-+=[]{};:./,<?>";
  

    let arrayofStrings = [
  
      {lowercases},
      {uppercases},
      {numbers},
      {specials},
    ];
  
    let password = "";


    //loop through for as long as they wanted the password
    for (var i = 0; i <= length; i++) {
      
      //creates a random number and then uses it to pick a random location to place the character
      var randomLocation = Math.floor(Math.random() * arrayofStrings.length);
      var randomBool = arrayofStrings[randomLocation];
  
      if( "lowercases" in randomBool) {
        if(arrayofStrings[0].lowercases == true) {
          password += lowerStr[Math.floor(Math.random() * lowerStr.length)];
        }
        else {
          i--;
          continue;
        }
      }
      else if( "uppercases" in randomBool) {
        if(arrayofStrings[1].uppercases == true) {
          password += upperStr[Math.floor(Math.random() * upperStr.length)];
        }
        else {
          i--;
          continue;
        }
      }
      else if( "numbers" in randomBool) {
        if(arrayofStrings[2].numbers == true) {
          password += numberStr[Math.floor(Math.random() * numberStr.length)];
        }
        else {
          i--;
          continue;
        }
      }
      else if( "specials" in randomBool) {
        if(arrayofStrings[3].specials == true) {
          password += specialStr[Math.floor(Math.random() * specialStr.length)];
        }
        else {
          i--;
          continue;
        }
      }
    }
    //return generated password
    return password;
  };
  
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
