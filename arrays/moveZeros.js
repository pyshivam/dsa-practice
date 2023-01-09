/**
 * Move Zeros
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

 */

/**
 * Move Zeros
 * 
 * @param {int[]} numbers 
 * @returns numbers
 */
function moveZero(numbers) {

  if (!Array.isArray(numbers)) return new Error("'numbers' param is not a array of numbers")

  let partition = 0

  for (let cursor = 0; cursor < numbers.length; cursor++) {
    const num = numbers[cursor];
    if (num !== 0) {
      let temp = numbers[partition]
      numbers[partition] = num
      numbers[cursor] = temp
      partition++
    }
  }
}


console.log(`[moveZero([0, 1, 0, 3, 12])]: `, moveZero([0, 1, 0, 3, 12]));