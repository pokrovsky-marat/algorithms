/* function partition(arr, start, end) {
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
}

function sort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let idx = partition(arr, start, end);
    sort(arr, start, idx - 1);
    sort(arr, idx + 1, end);
  }
}
function genArr(size) {
  let res = [];
  for (let i = 0; i < size; i++) {
    res.push(Math.round(Math.random() * 1000));
  }
  return res;
}
function genSortedArr(size) {
  let res = [];
  for (let i = 0; i < size; i++) {
    res.push(i);
  }
  return res;
}
function checkSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log("fail at", i);
      return;
    }
  }
  console.log("Ok");
  return;
}

let arr = genArr(10000000);
let time = Date.now();
sort(arr);
console.log(Date.now() - time, " ms");
checkSort(arr);

arr = genSortedArr(10000000);
time = Date.now();
sort(arr);
console.log(Date.now() - time, " ms");
checkSort(arr);
 */
