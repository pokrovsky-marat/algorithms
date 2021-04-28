let part = (arr: number[], start: number, end: number): number => {
  let random = ~~((start + end) / 2); //Drop fractional part
  [arr[random], arr[start]] = [arr[start], arr[random]];
  let pivIdx = start;
  let piv = arr[pivIdx];
  let i = start;
  let j = end;
  while (i <= j) {
    while (arr[i] <= piv) i++;
    while (arr[j] > piv) j--;
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  [arr[j], arr[pivIdx]] = [arr[pivIdx], arr[j]];
  return j;
};

function qSortStack(arr: number[]): void {
  let stack: number[] = [0, arr.length - 1]; //Ititial values
  while (stack.length > 0) {
    let end = stack.pop();
    let start = stack.pop();
    let idx = part(arr, start, end);
    if (start < idx - 1) {
      stack.push(start);
      stack.push(idx - 1);
    }
    if (idx + 1 < end) {
      stack.push(idx + 1);
      stack.push(end);
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
function checkSort(arr: number[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log("Fail at index  ", i);
      return;
    }
  }
  console.log("OK");
  return;
}

let arr = genArr(1000000);
let time = Date.now();
qSortStack(arr);
console.log(Date.now() - time, " ms");
checkSort(arr);

arr = genSortedArr(1000000);
time = Date.now();
qSortStack(arr);
console.log(Date.now() - time, " ms");
checkSort(arr);
