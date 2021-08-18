// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0;

  const matches = s.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}
module.exports = vowels;

// function vowels (s) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   let count = 0;

//   for (let letter of s.toLowerCase()) {
//   	if (vowels.indexOf(letter) != -1) {
//     	count++
//     }
//   }
//   return count;
// }