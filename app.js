var name1 = prompt("Please enter your name: ");

//Ask the user to enter his/her gender as input. The answer should be either (male or female)
var gender = prompt("Please enter your gender (male or female): ");
while (gender !== "male" && gender !== "female") {
  gender = prompt("Please enter a valid gender (male or female): ");
}

//Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero
var age = prompt("Please enter your age: ");
if (age <= 0) {
  alert("Age should be greater than zero.");
}

//Ask the user to confirm if he wants to skip the welcoming message
var skipWelcomingMessage = confirm("Do you want to skip the welcoming message?");

//Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female,
// and if the gender input is not correct alert the welcoming message without the title, according to the confirmation
if (!skipWelcomingMessage) {
  if (gender === "male") {
    alert("Welcome Mr. " + name1 + "!");
  } else if (gender === "female") {
    alert("Welcome Ms. " + name1 + "!");
  } else {
    alert("Welcome " + name1 + "!");
  }


}
 

