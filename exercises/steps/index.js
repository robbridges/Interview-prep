// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//    console.log('#'.repeat(i) + ' '.repeat(n - i));
//   }
// }

// function steps(n) {
//   //iterate through the rows that we need to build\
//   // think it of it like a matrix, if the current column is equal to or less than the current row, print a stair, otherwise a space.
//   for (let row = 0; row < n; row ++) {
//     let stair = ''
//     for (let column =0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }
