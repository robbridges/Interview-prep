// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	const max =  Math.pow(2, 31);
  
	
	
  let reversedNumber = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversedNumber) * Math.sign(n);
  
  
  
  
  
}

module.exports = reverseInt;

// function reverseInt(n) {
// 	const max =  Math.pow(2, 31);
  
	
	
//   let reversedNumber = parseInt(n.toString().split('').reverse().join(''),10) * Math.sign(n);
  
  
//   if (reversedNumber > max || reversedNumber < -max) { 
//   	console.log('out of bounds');
//     return 0;
//   }
  
  
//   console.log(reversedNumber);
//   return reversedNumber;
  
// }
