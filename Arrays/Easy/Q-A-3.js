/* Sorted Squared Array
write a function that takes in a non-empty array of integers that are sorted 
in ascending order and returns a new array of the same length with the squares 
of the original integers also sorted in ascending order.
Sample Input: 
array = [1, 2, 3, 5, 6, 8, 9]
Sample Output:
[1, 4, 9, 25, 36, 64, 81]
 */
/* Solution and Ideas 
Solution 1: brute force approach, this approach runs in non-optimal time complexity,
generate all of the squares of the values in the input array, sort them and then return that output values in an empty array.
Time Complexity:: o(n logn) because sorting an array is a time complexity of big O of n log n time 
Space Complexity: O(n) because of an extra array empty array that returns all of the output values.
*/
function sortedSquaredArray(array) {
    const sortedSquared = []; 
    for (let i = 0; i < array.length; i++) {
        sortedSquared = array[i] * array[i];
    }
    sortedSquared.sort((a, b) => a - b);
    return sortedSquared;
}
/* Solution 2: because of input array is sorted in ascending order, it allows to solve this problem in linear time or a more optimal time complexity.
In this solution we compare the absolute values, and whichever one has the largest absolute value and squared that value and insert that at the last position in output array.
first initialize the start pointer that set to beginning of the array and initialize the end pointer at the end of array and keep moving start and end pointer either to the left or to the right depending on  which one it is,
as we insert either that start pointer element or that end pointer element depending on whatever the largest absolute value is and squared the value and place the square at the end of the output array, filling it up from right to left.
Move the pointrs accordingly and repeat the process until the output array is fillled.

Time Complexity: o(n) beacuse we need go through every element of an array one time and create/ return  the entire output array.
Space Complexity: O(n) because need to create a new output/ extra array that store all of the sorted squared values.
*/
function sortedSquaredArray(array) {
    sortedSquared = [];
    let left = 0;
    let right = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const leftValue = array[left];
        const rightValue = array[right];
        if (Math.abs(leftValue) > Math.abs(rightValue)) {
            sortedSquared[i] = leftValue * leftValue;
            left++;
        } else {
            sortedSquared[i] = rightValue * rightValue;
            right--;
        }
    }
    return sortedSquared;
}

/* Solution  3: JavaScript.map() function 
Time Complexity:: o(n logn)
Spcae Complexity: o(n)
*/
function sortedSquaredArray(array) {
    // Write your code here.
    const sortedSquared = array.map((value) => value * value)
    return sortedSquared.sort((a,b) => a - b);
}
