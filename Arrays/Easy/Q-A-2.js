/* Question- 2: 
Validate Subsequence: Given two non - empty arrays of integers, write a function that determines whether the second array is a Subsequence of the first one.
A subsequence of an array is a set of numbers that are not necessarily adjacent in the array but that are in the same order as they appear in the array.For instance, the numbers [1, 3,4] form a subsequence of the array [1, 2, 3, 4] , 
and so do the numbers [2, 4]. Note that a single number in the array and the array itself are both valid subsequences of the array.
Sample Input:
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
Sample Output:
true
 */
/* Solutions and Ideas
The concept of question is based on the concept of subsequences.In mathematices, a subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements. (wiki definition)
In the question, we have to determine whether or not this [1, 6, -1, 10] array is valid subsequence of this array [5, 1, 22, 25, 6, -1, 8, 10].
another concept in order for an array to be a valid subsequences of another array, all of the integers in the potential subsequences have to not only appear in the original array but they also have to appear in the same order as like original array. They do not necessarily have to be adjacent.
*/
/* Solution: 1
- traverse the first main array to check that the sequence could be located anywhere in the main array.
- traverse the second  sequence arrays that check the validate subsequence of original array
- subsequence cares about order
- use while loop: initialize the first pointer underneath the first element of our subsequence or potential subsequence  and also set the another pointer in main array and iterating the main array by looking at elemnts and seeing if we find the first element in our potential subsequence.
*/
function isValidSubsequence(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx])
        seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}

/*
Time Complexity: O(N) N is the length of main array , because we iterate all of the main array and check whether it match with the current element.
Space Complexity: O(1) conatant, because we do not store any values/ variables expect some a couple of pointers for positions in the respective arrays.
 */

/* Solution: 2 
- use for loop: you'll have to declare a variable holding the position in the potential subsequence.At first, this position will be the 0th index in the sequence, Iterate through the main array, and look for the first integer in the potential subsequence. 
If you find that integer, keep on iterating through the main array,you'll increment the position variable untill you reach the end of the sequence.
but now look for the second integer in the potential subsequence. Continue this process untill you either find every integer in the potential subsequence or you reach the end of the main array.
*/
function isValidSubsequence(array, sequence) {
    // Write your code here.
    let seqIdx = 0
    for (const value of array) {
        if (seqIdx === sequence.length)
        return true
        if (sequence[seqIdx] === value)
        seqIdx++;
    }
    return seqIdx === sequence.length;
}
/* 
Time Complexity: O(N)
Space Complexity: O(1)
*/