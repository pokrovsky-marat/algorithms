function merge(a: number[], b: number[]): number[] {
  let i = 0;
  let j = 0;
  let res: number[] = [];
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      res.push(a[i]);
      i++;
    } else {
      res.push(b[j]);
      j++;
    }
  }
  return [...res, ...a.slice(i), ...b.slice(j)];
}

function sort(arr: number[]): number[] {
  if (arr.length > 1) {
    let mid = Math.trunc(arr.length / 2);

    return merge(sort(arr.slice(0, mid)), sort(arr.slice(mid, arr.length)));
  } else {
    return arr;
  }
}
function genArr(size: number): number[] {
  let res: number[] = [];
  for (let i = 0; i < size; i++) {
    res.push(Math.round(Math.random() * 1000));
  }
  return res;
}

let date2 = Date.now();
sort(genArr(2000000));
console.log(Date.now() - date2);
