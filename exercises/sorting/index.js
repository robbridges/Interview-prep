// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0;  j < (arr.length -i -1); + j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser =arr[j + 1]
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //we set min to i, but check to see if any other vlaue in the array is less than i
    let indexOfMin = i;
    // if the value that is one index ahead of i, assign it to index of i, we do this by incrementing J, finally moving every in a sorted place
    for (let j = i+1; j <arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  //[1,2,3,4] 3 would be the center
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center); //[1,2]
  const right = arr.slice(center); // [3-4]

  // we keep dividing the array in half until each one has one. Then we recursively merge the arrays back together in their sorted position with our merged fuction
  // this is tough to vizualize to be honest, 
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];
  // while both arrays have a value, we check to see which array has the lowest value, since they're sorted we can assume no further iteration is needed. We take that value out and push it 
  // into results
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      // left is smaller, we take the first item of the left array and push it to results.
      results.push(left.shift())
    } else {
      results.push(right.shift());
    }
  }
  // we return a spread of results, left, and right, so whichever array still had the value, was the largest item and gets added to the end. We have successfully combined two sorted arrays.

  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
