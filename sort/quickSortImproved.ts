function partition(arr: number[], start: number, end: number) {
  // Taking the last element as the pivot
  //Get random value

  let randIndex = Math.trunc(arr.length / 2);

  //swap value between random index and last index
  [arr[randIndex], arr[end]] = [arr[end], arr[randIndex]];
  //take value from last index as pivot

  const pivotValue = arr[end];

  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

  return pivotIndex;
}

function quickSortRecursive(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
) {
  // Base case or terminating case
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = partition(arr, start, end);

  // Recursively apply the same logic to the left and right subarrays
  quickSortRecursive(arr, start, index - 1);
  quickSortRecursive(arr, index + 1, end);
}
function quickSortIterative(arr: number[]) {
  // Creating an array that we'll use as a stack, using the push() and pop() functions
  let stack: number[] = [];

  // Adding the entire initial array as an "unsorted subarray"
  stack.push(0);
  stack.push(arr.length - 1);

  // There isn't an explicit peek() function
  // The loop repeats as long as we have unsorted subarrays
  while (stack[stack.length - 1] >= 0) {
    // Extracting the top unsorted subarray
    let end = stack.pop();
    let start = stack.pop();
    if (typeof start === "number" && typeof end === "number") {
      let pivotIndex = partition(arr, start, end);
      // If there are unsorted elements to the "left" of the pivot,
      // we add that subarray to the stack so we can sort it later
      if (pivotIndex - 1 > start) {
        stack.push(start);
        stack.push(pivotIndex - 1);
      }

      // If there are unsorted elements to the "right" of the pivot,
      // we add that subarray to the stack so we can sort it later
      if (pivotIndex + 1 < end) {
        stack.push(pivotIndex + 1);
        stack.push(end);
      }
    }
  }
}
function genArr(size: number): number[] {
  let res: number[] = [];
  for (let i = 0; i < size; i++) {
    res.push(Math.round(Math.random() * 1000));
  }
  return res;
}
function genSortedArr(size: number): number[] {
  let res: number[] = [];
  for (let i = 0; i < size; i++) {
    res.push(i);
  }
  return res;
}

/* let arr2 = genArr(2500000);
let arr = genSortedArr(1500);

let date = Date.now();
quickSortIterative(arr2);
console.log(Date.now() - date);

let date3 = Date.now();
quickSortIterative(arr);
console.log(Date.now() - date3); */

let array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortIterative(array);
console.log(array);
