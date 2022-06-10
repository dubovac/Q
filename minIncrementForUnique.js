/* Topic: Minimum Operations to make Array Unique
 *
 * You are given an integer array nums.
 * In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.
 * Return the minimum number of moves to make every value in nums unique.
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,2]
 * Output: 1
 * Explanation: After 1 move, the array could be [1,2,3]
 *
 *
 * Example 2:
 *
 * Input: nums = [3,2,1,2,1,7]
 * Output: 6
 * Explanation: After 6 moves, the array could be [3,4,1,2,5,7]
 * It can be shown 5 or less moves that it is impossible for the array to have all unique values
 *
 *
 * Constrains:
 *
 * 1 <= nums.length <= 105
 * 0 <= nums[i] <= 105
 */

function minIncrementForUnique(nums) {
	let u = [];
	let c = [];
	let t = 0;
	let m = 0;

	// creates array with unique numbers
	for(let i = 0;i < nums.length;i++)
		if(!u.includes(nums[i]))
			u.push(nums[i]);
	// console.log(u);
	
	// creates array with copies
	for(let j = 0;j < u.length;j++) {
		for(let k = 0;k < nums.length;k++)
			if(u[j] == nums[k])
				if(t == 0)
					t++;
				else
					c.push(nums[k]);
		t = 0;
	}
	// console.log(c);
	
	// adding new numbers to unique array and incrementing moves
	for(let l = 0;l < c.length;l++) {
		while(u.includes(c[l])) {
			c[l]++;
			m++;
		}
		u.push(c[l]);
	}
	// console.log(u);


	return m;
}


console.log(minIncrementForUnique([1,2,2]));
console.log(minIncrementForUnique([3,2,1,2,1,7]));
console.log(minIncrementForUnique([3,2,7,7,1,2,1,7]));
console.log(minIncrementForUnique([3,2,1,2,1,2,1,7]));
console.log(minIncrementForUnique([1,2,3,4,5]));
