//function to insert arr1 into arr2 at index n
function frankenSplice(arr1, arr2, n) {
    let newArr = []; //initialize new array
    newArr = arr2.slice(); //assign arr2 to new array to maintain arr2
    newArr.splice(n, 0, ...arr1); //use splice function to spread arr1 into new array at location n, removing 0 items
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);