function findLongestWordLength(str) {
    //initialize variables
    let arr = [];
    let arrLength = [];
    let lengthCount = 0;

    //turn string into array of words
    arr = str.split(" ");

    //iterate over array of words to find length of each word - then assign length to array
    for (let i = 0; i < arr.length; i++){
      arrLength.push(arr[i].length);
    }
  
    //iterate over array of lengths to find longest length and assign to lengthCount
    for (let j = 0; j < arrLength.length; j++){
      if (arrLength[j] > lengthCount){
        lengthCount = arrLength[j];
      }
    }

    //return longest string
    return lengthCount;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));  