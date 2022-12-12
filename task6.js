let arr = [1, 4, "Иван", 0];


function compareType(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      return false;
    }
  }
  return true
}

console.log(compareType(arr));
