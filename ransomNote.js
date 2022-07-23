/*
 * Topic: Ransom Note
 *
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines;
 * otherwise, it will return false.
 *
 * Each letter in the magazine string ca only be used once in your ransom note.
 *
 * Note: You may assume that both strings contain only lowercase letters.
 *
 * 	Example 1:
 * 		Input: canConstruct("a", "b")
 * 		Return Value: false
 *
 * 	Example 2:
 * 		Input: canConstruct("aa", "ab")
 * 		Return Value: false
 *
 * 	Example 3:
 * 		Input: canConstruct("aa", "aab")
 * 		Return Value" true
 *
 * 	Function Prototype in JS (you can do this in any language)
 *
 * 		function ransomNote(param_1, param_2)
 * 		{
 *
 * 		}
 */

function ransomNote(string1, string2) {
	let t;

	for (let i = 0; i < string2.length; i++)
		for (let j = 0; j < string1.length; j++)
			if (string1[j] == string2[i]) {
				t = 1;
				for (let k = 0; k < string1.length; k++)
					if (string1[k] != string2[i + k])
						t = 0;
				if (t == 1)
					return true;
			}
	return false;
}

console.log(ransomNote("a", "b"));
console.log(ransomNote("aa", "ab"));
console.log(ransomNote("aa", "aab"));
console.log(ransomNote("aaa", "aabbaabb"));
console.log(ransomNote("bbb", "aabbaabbbbaa"));
