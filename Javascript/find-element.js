//find first element in array that returns true under provided function
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++){ //for loop over length of array
      if (func(arr[i]) == true){ //test each element in array by calling function on that element
        return arr[i]; //if function returns true then return array element
      }
    }
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);