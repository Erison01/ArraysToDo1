
console.log("Push Front >>>")

function pushFront(arr, value) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
  return arr;
}

console.log(pushFront([5, 7, 2, 3], 8)); 




console.log("Pop Front >>>")

function popFront(arr) {
  const value = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(value + " returned, with " + arr + " printed in the function");
}

popFront([0, 5, 10, 15]); 



console.log("Insert At >>>")

function insertAt(arr, index, value) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
}

console.log(insertAt([100, 200, 5], 2, 311)); 



console.log("Remove At >>>")

function removeAt(arr, index) {
  const value = arr[index];
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(value + " returned, with " + arr + " printed in the function");
}

removeAt([1000, 3, 204, 77], 1); 



console.log("Swap Pairs >>>")

function swapPairs(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

console.log(swapPairs([1, 2, 3, 4])); 




console.log("Remove Duplicates >>>")

function removeDupes(arr) {
  let uniqueIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[uniqueIndex]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[i];
    }
  }
  arr.length = uniqueIndex + 1;
  return arr;
}

console.log(removeDupes([-2, -2, 3.14, 5, 5, 10])); 
