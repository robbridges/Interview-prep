// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



function chunk(array, size) {
  let chunk = [];
  let index = 0;
  while (index < array.length) {
  	chunk.push(array.slice(index, index + size));
    index += size;
  }
  return chunk

}


module.exports = chunk;

// function chunk(array, size) {
//   let result = [];
//     for (let value of array){
//         let lastArray = result[result.length -1 ];
//         if(!lastArray || lastArray.length === size){
//             result.push([value]);
//         } else{
//             lastArray.push(value);
//         }
//     }
//     return result;
// }
