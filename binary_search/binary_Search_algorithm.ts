function binarySearch(arr: number[], value: number): number | null {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(`start = ${start} | end = ${end} | mid = ${mid} `);
    if (arr[mid] === value) return mid;
    if (arr[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return null;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 33, 44, 55, 66, 77, 88, 999];
console.log(binarySearch(arr, -11));
