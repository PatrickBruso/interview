//function to sort an array and find the index of a number inserted into the sorted array in the proper place

function compare(a, b){ //function to use with .sort() to sort array from least to most
    if (a < b){return -1;}
    if (a > b){return 1;}
    if (a === b){return 0;}
  }
  
  function getIndexToIns(arr, num) {
    arr.sort(compare); //sort our array (could probably insert function here)
    
    if (num > arr.slice(-1)){ //if num is larger than last number in sorted array return array length (remember length is not 0 indexed)
      return arr.length;
    }
  
    for (let i = 0; i < arr.length; i++){ //iterate over array
      if (num == arr[i]){ //if number is equal to sorted index return that index
        return arr.indexOf(arr[i]); //I think this could just return i
      } else if (num < arr[i]){ //if number is less than the item in array return that index (could be combined with prior if statement)
        return arr.indexOf(arr[i]); //Could just return i
      }
    }
  }
  
  getIndexToIns([40, 60], 50);