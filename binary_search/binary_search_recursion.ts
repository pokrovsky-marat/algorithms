function binarySearch(
  arr: number[],
  value: number,
  start = 0,
  end = arr.length - 1
): number {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === value) return mid;
  if (start > end) return -1;
  else {
    if (arr[mid] > value) {
      end = mid - 1;
      return binarySearch(arr, value, start, end);
    } else {
      start = mid + 1;
      return binarySearch(arr, value, start, end);
    }
  }
}
let arr = [3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 12, 33, 44, 55, 66, 77, 3, 999];
console.log(binarySearch(arr, -43));
