// Task 2: 
// You are given an array of numbers. Write a function that calculates the total sum and the average of the numbers using the reduce method.

// Function to calculate the total sum and average
function calculateSumAndAverage(numbers) {
   const totalSum = numbers.reduce((sum, num) => sum + num , 0);
   const average = numbers.length ? totalSum / numbers.length : 0;
   return { sum: totalSum, average };
}


const numbers = [5, 10, 15, 20, 25 , 25];
const result = calculateSumAndAverage(numbers);

console.log("Total Sum:", result.sum);   
console.log("Average:", result.average);

//#######################//
//#######################//

// Task 3:
// You are given an array of strings, some of which may be duplicates. Write a function that removes all duplicates from the array in constant time complexity and returns the array with unique values.  

//  Function For remove duplicates.
function removeDuplicates(arr) {
   return [...new Set(arr)];
}

// The Array
console.log(removeDuplicates(numbers)); 


