/* Question:1
Two Number Sum : Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. 
Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the target sum. */

// Sample Input
array = [ 3 ,5, -4, 8, 11, 1, -1, 6 ]
targetSum = 10

// Sample Output 
// [-1, 11] the number could be in reverse order
// Sloutions and Ideas
// 1. use two nested for loops: traverse the array twice to find the sum. 
function twoNumberSum(array, targetSum) {
  // Write your code here.
for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
for (let j = i + 1; j < array.length; j++) {
    const secondNum = array[j];
      if ( firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  };
  return [];
}

/* Time Complexity: O(n^2) beacuse of double for loop; both loop will run n times and since it's nested.
Space Complexity: O(1) */

// 2. Hash Method - need extra spcae but make algorithm faster : traverse the array first and store every number in a hash table that allows to access these numbers in constant time through that hash table.

function twoNumberSum(array, targetSum) {
  let nums = {}
  for (const num of array){
     let potentialMatch = targetSum - num // y = targetSum - x
    if ( potentialMatch in nums){
        return [potentialMatch, num]
      }else{
        nums[num]=true
      }
  }
  return [];
}
/*Time complexity: O(n) where n represents the length of input array.
Space complexity: O(n) because add values in hash table */


// 3. Sort Method: sorting the array and set left (L)pointer and right pointer under the first number and last number in the array and two sum up L and R point.

function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a,b) => a-b);
  let left = 0
  let right = array.length-1
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum ===targetSum){
      return [array[left], array[right]]
    } else if (currentSum <targetSum) {
    left++;
    } else if (currentSum >targetSum){
    right--;
    }
}
return [];
}

/* Time Complexity: O(nlog(n)) because sorting array will take O of n log time and also moving left and right pointer everytime and go throught all number once or twice.
Space Complexity: O(1)  */

