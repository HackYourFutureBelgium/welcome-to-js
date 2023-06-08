let text = 'howdy';
let reversed = '';
console.log(text.length)
for (let i=0; text.length<i; i++) {
    console.log(text[i]);
  reversed = text[i] + reversed ;
}
console.log(reversed);