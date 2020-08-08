//function to repeat a string x number of times
function repeatStringNumTimes(str, num) {
    //return empty strings for numbers below 0
    if (num < 1){
      return "";
    } else {
      let arr = [];  //initialize empty array
      for (let i = 1; i <= num; i++){  //iterate over num to push string to array
        arr.push(str);
      }
      return arr.join(''); //return array joined as string
    }
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  