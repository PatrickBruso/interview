//function that truncates a string based on a number
function truncateString(str, num) {
    let arr = str.split(''); //initalize array and assign it string
    if (num >= arr.length){ //if num is higher than length of array return the string
      return str;
    } else {  //slice array from 0 to num and assign to new array, which is returned
      let truncatedArr = arr.slice(0, num);
      truncatedArr.push("...");
      return truncatedArr.join('');
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);