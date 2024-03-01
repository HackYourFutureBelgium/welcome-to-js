'use strict';

let input = null;
while (input === null || input.length !== 5) {
  input = prompt('enter something with 5 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

let userInput ;
while (userInput  || userInput.length !== 10) {
  const partOne = prompt ('enter the first 5 character');
  const partTwo = prompt ('enter the second 5 character');
  if (partOne & partTwo){
    userInput = partOne + partTwo;
  }else{
    alert(
      `you need to enter something to both prompts
      and the length of both must be 10 characters`,
    )
  }
}
alert ('Thank you for your input : ' + userInput);