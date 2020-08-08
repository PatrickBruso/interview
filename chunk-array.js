//program to chunk array into two-dimensional arrays of size given

function chunkArrayInGroups(arr, size) {
    var newArray = []; //set new array to return
    for (let i = 0; i < arr.length; i += size){ //iterate over array for size of chunk
      newArray.push(arr.slice(i, i + size)); //for each chunk, push the slice of that chunk to new array
    }
    return newArray;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));