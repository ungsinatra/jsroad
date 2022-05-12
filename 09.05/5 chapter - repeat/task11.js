const isEqual = (firstArray, secondArray) => {
  let res;
  for (let fisrt of firstArray) {
    for (let second of secondArray) {
      if (fisrt===second) {//?fisrt.includes(second)
        res = true;
      } else {
        res = false;
      }
    }
  }
  return res;
};

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false
