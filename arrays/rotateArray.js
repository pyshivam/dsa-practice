/**
 * 
 * Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 * 
 */


/**
 * Reverse the array based on starting and ending index
 * 
 * @param {number[]} arr List of elements to reverse
 * @param {number} left starting point from where we want to start reversing the array
 * @param {number} right ending point index where we want to stop 
 */
function reverse(arr, left, right) {
  while (left < right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

    left++
    right--
  }
}


/**
 * 
 * @param {number[]} numbers Array of elements
 * @param {number} k how many times you want to rotate array to right
 * @returns {null}
 */
function rotateArray(numbers, k) {
  if (!Array.isArray(numbers)) return new Error("'numbers' param is not a array of numbers")
  if (typeof k !== "number") return new Error("K is not a number")

  let rounds = k % numbers.length

  reverse(numbers, 0, numbers.length - 1)
  reverse(numbers, 0, rounds - 1)
  reverse(numbers, rounds, numbers.length - 1)
}

let testArray = [1, 2, 3, 4, 5, 6, 7]
rotateArray(testArray, 3)
console.log(`[rotateArray(testArray, 3)]: `, testArray);