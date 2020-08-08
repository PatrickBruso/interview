function largestOfFour(arr) {
    //initialize variable to return array of largest numbers
    let newArr = [];

    //for loop to iterate over array
    for (let i = 0; i < arr.length; i++){

        //initialize value to test against to determine larger number
        let count = arr[i][0];

        //for loop to iterate over subarrays
        for (let j = 0; j < arr[i].length; j++){

            //if statement to compare values of subarray to determine largest
            if (arr[i][j] > count){
            count = arr[i][j];
            }
        }
        //push largest number from each subarray onto array to return
        newArr.push(count);
    }
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);