/**
 * TWO SUM
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */



/**
 * Two sum
 * 
 * @param { int[] } numbers 
 * @param { int } target 
 * @returns int[]
 */
function twoSum(numbers, target) {

  if (!Array.isArray(numbers)) return new Error("'numbers' param is not a array of numbers")
  if (numbers.length < 2) return new Error("Single element found in a numbers array")
  if (typeof target !== "number") return new Error("Target is not a number")

  const sum = []

  let hashTable = {}


  for (let i = 0; i < numbers.length; i++) {
    const el = numbers[i];
    let difference = Math.abs(target - el);
    if (hashTable.hasOwnProperty(difference)) {
      sum.push(i)
      sum.push(hashTable[difference])
      break;
    }
    hashTable[el] = i
  }

  return sum
}


console.log(`[twoSum([2, 7, 11, 15], 26)]: `, twoSum([2, 7, 11, 15], 26));