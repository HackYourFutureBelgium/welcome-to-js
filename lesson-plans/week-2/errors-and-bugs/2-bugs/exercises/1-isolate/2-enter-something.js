'use strict';

/*
  test cases:
    null -> (do not exit the loop)
    '' -> (do not exit the loop)
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line: 22,24
    why: fix decalring same variable twice 
    trying: now enter input value

*/

let message = '';

let input = null;
while (input === null || input.length === 0) {
   input = prompt('enter something'); //remove variable devalatrion
}
 message = 'you entered "' + input + '"'; //take out the message box outside of the loop
alert(message);
