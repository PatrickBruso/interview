//function to filter false values from array

function isFalse(value){ //function to return only true values
    if (Boolean(value) == true){
      return value;
    }
  }
  
  function bouncer(arr) {
    let newArr = arr.filter(isFalse); //call filter on array passing in isFalse function to remove false values
    return newArr;
  }
  
  bouncer([7, "ate", "", false, 9]);