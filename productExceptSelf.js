/* Given an integer array nums, return an array answer such that answer[i] is equal to the product
 * of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

function productExceptSelf(nums) {
	let answer = [];
	for(let i = 0;i < nums.length;i++) { 
		answer[i] = 1;
		for(let j = 0; j < nums.length;j++)
			if(j != i)
			answer[i] *= nums[j];
	}
	return answer;
}
