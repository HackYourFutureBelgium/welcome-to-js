'use strict';

/*
  test cases:
    '' -> ''
    'a' -> 'a!'
    'hello' -> 'h!e!l!l!o!'
    ':)' -> ':!)!'


  experiment 1
    line:25
    why:variable excited was loosing value as it moves forward to next value for input
    trying:store value of excited somehow and try again

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be excited');
}

let excited = '';
for (const character of text) {
  excited += character + '!'; //Before we were loosing value of previous variable so we changed the code to store valuee of excited

}

alert(excited);
