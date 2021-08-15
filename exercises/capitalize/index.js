// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// this isn't a great solution and only accounts for english language, the below is much better
function capitalize(str) {
	let result = str[0].toUpperCase();

  for (i = 1; i < str.length; i++) {
    if (str[i-1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;





// the below is a much better solution to this.

// function capitalize(str) {
// 	const newArray = []
// 	const splitArray =(str.split(' '));
//   for (let word of splitArray) {
//   	/* const upperCase = word[0].toUpperCase();
//   	word = upperCase.concat(word.substring(1));
//   	newArray.push(word); */
//     newArray.push(word[0].toUpperCase().concat(word.slice(1)));
//     }
//   return newArray.join(' ');
// }
