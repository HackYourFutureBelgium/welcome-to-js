'use strict';

let input = null;

// Infinite loop
while (input === null) { 
  input = prompt('input something:');
}
// This line will never be reached due to the infinite loop
alert('thank you!');

/*  ===== Challenges =====
  - Try to create an infinite loop so the user gets stuck inside your prompt.
*/
