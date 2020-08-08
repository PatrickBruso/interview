//function to check whether string ends with given target
function confirmEnding(str, target) {
    //set variable to length of target
    let tarLength = target.length;
    //turn string into array
    let arr = str.split('');
    //slice the portion of string that matches length of target from end of array
    let tarCompare = arr.slice(-tarLength);
    //convert sliced section of array to string and compare to target
    if (tarCompare.join('') == target){
      return true;
    } else {
      return false;
    }
  }
  confirmEnding("Bastian", "n");