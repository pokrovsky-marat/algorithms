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

function qSort(list: number[]): number[] {
  if (list.length < 2) {
    return list;
  } else {
    let pivot = list[0];
    let left: number[] = [];
    let rigt: number[] = [];
    list.slice(1).forEach((i) => {
      if (i < pivot) {
        left.push(i);
      } else if (i >= pivot) {
        rigt.push(i);
      }
    });
    return [...qSort(left), pivot, ...qSort(rigt)];
  }
}

console.log(qSort(array));
