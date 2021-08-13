// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //return reversed string;
  //split input string into array
  let reversed = '';
  
  for (let character of str) {
    reversed = character + reversed;
    
  }
  return reversed;
  
  
}



module.exports = reverse;

// function reverse(str) {
//   //return reversed string;
//   //split input string into array
//   return str
//   .split('')
//   .reverse()
//   .join('');
  
// }

// function reverse(str) {
//   //return reversed string;
//   //split input string into array
//   const reversed = [];
//   const arr = str.split('');
//   arr.forEach((char) => {
//   	reversed.unshift(char);
//   })
//   return reversed.join('');
  
  
// }



// function reverse(str) {
//   //return reversed string;
//   //split input string into array
  
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

