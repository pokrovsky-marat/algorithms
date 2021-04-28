const min = (arr: number[]): number => {
  let index = 0;
  let min = arr[index];
  arr.forEach((value, idx) => {
    if (value < min) {
      index = idx;
      min = value;
    }
  });
  return index;
};

function selectionSort(arr: number[]): number[] {
  let res: number[] = [];
  while (arr.length > 0) {
    let minIndex = min(arr);
    res.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }
  return res;
}
let array = [
  9,
  8,
  7,
  6,
  2,
  1,
  99,
  33,
  77,
  33,
  21,
  -23,
  0,
  -3,
  45,
  345,
  3,
  4,
  5,
  6,
  7,
  -333,
];
console.log(selectionSort(array));
