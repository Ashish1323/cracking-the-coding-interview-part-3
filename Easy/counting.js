// Q: Given an array of 0’s and 1’s (in random order), return the same array after moving all 0’s to the left of the array and 1’s to the right of the array. (Without sorting)
// Ex:  Input: [0,1,1,0,1,0,0,1]
//      Output: [0,0,0,0,1,1,1,1]


function counting(arr){

    let leftPointer = 0;
    let rightPointer = arr.length - 1;
  
    while (leftPointer <= rightPointer) {
      // Move left pointer until it finds a 1
      while (arr[leftPointer] === 0) {
        leftPointer++;
      }
  
      // Move right pointer until it finds a 0
      while (arr[rightPointer] === 1) {
        rightPointer--;
      }
  
      // Swap 0 and 1 if left pointer is still to the left of right pointer
      if (leftPointer <= rightPointer) {
        [arr[leftPointer], arr[rightPointer]] = [0,1];
        leftPointer++;
        rightPointer--;
      }
    }
  
    return arr;
}

console.log( counting([0,1,1,0,1,0,0,1]))