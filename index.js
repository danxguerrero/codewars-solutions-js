// 8 kyu - Sum without highest and lowest number

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    if (!array || array.length < 3) {
      return 0
    }
    
    array.sort(function(a, b){return a-b})
    array.shift()
    array.pop()
    
    
    return array.reduce((sum, num) => sum + num, 0)
    
}

// 8 kyu - Short Long Short

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"

function solution(a, b){
  let short
  let long
  
  if (a.length > b.length) {
    short = b
    long = a
  } else {
    short = a
    long = b
  }
  
  return short + long + short

  // (a.length > b.length) ? b+a+b : a+b+a
}

// 7 kyu - Testing 1-2-3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


var number=function(array){
  let solution = []
  for (let i = 0; i < array.length; i++) {
    solution.push(`${i+1}: ${array[i]}`)
  }
  return solution
}

// 8 kyu - Grader


// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:

// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"

function grader(score) {
  if (score > 1 || score < 0.6) return 'F';
  else if (score >= 0.9) return 'A';
  else if (score >= 0.8) return 'B';
  else if (score >= 0.7) return 'C';
  else if (score >= 0.6) return 'D';
}


// 7 kyu - Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
  return s
    .split('') // Split input into array of characters
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)) // Map each character in array to an array of 1 upper case letter and then repeat character in lower case index times
    .join('-'); // Join each part of array with a hyphen
}

//6 kyu - Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

function twoSum(numbers, target) {
  // empty object to store tested numbers
  testedNums = {}
  
  for (i = 0; i < numbers.length; i++) {
    // Subtract target from number at numbers index i
    const compliment = target - numbers[i]
    // Check to see if compliment is in hashmap
    if (testedNums[compliment] !== undefined) {
      // if it exists, return an array with the compliments index and i
      return [testedNums[compliment], i]
    }
    
    // If compliment is not in testedNums, add numbers[i] and i to testedNums
    testedNums[numbers[i]] = i
  }
}

// 6 kyu - Replace With Alphabet Position
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  // Convert the string to lowercase
  text = text.toLowerCase()
  // Create empty array to store positions
  const positions = []
  // Iterate over the string
  for (i=0; i < text.length; i++) {
    let char = text[i]
    // Check if each character is a letter
    if (char >= 'a' && char <= 'z') {
      // Calculate position in alphabet
      // Using charCodeAt(0) will give the ASCII code 
      let position = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1 // Subtracting the ASCII code of 'a' gives us the position in the alphabet (e.g., for 'a', 97 - 97 + 1 = 1).
      // If letter, store the position in the created array
      positions.push(position)
    }

  }
  // Join each letter in the array
  return positions.join(" ")
}

// 5 kyu - Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let zeroCount = 0 
  let result = []
  
  for (i=0;i < arr.length; i++) {
    if (arr[i] !== 0) { // If value does not equal zero
      result.push(arr[i]) // push value to result array
    } else {
      zeroCount++ // if it does equal zero, increase the zero count
    }
  }

  // Add zeros to the end of the array based on zero count
  for (i=1; i <= zeroCount; i++) {
    result.push(0) 
  }
  return result
}

// 6 kyu - Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
  const words = string.split(" ") // Split the given string into an array of words 
  const newSentence = []
  for (let i=0; i < words.length; i++) {
    const word = words[i]
    if (word.length >= 5) { // If the word is 5 or more letters,
      // Split the word into an array of characters
      // Reverse the array 
      // Join the array into a new string
      const reversedWord = word.split("").reverse().join("")
      newSentence.push(reversedWord) // Add that into the newSentence array
    } else { 
      newSentence.push(word) // If shorter than 5 letters, just push word into newSentence
    }
  }
  return newSentence.join(" ") // return the newSentence joined with a space

  // Another Solution seen on codewars:
  // return string.split(" ").map( word => word.length < 5 ? word : word.split("").reverse().join(""))
}

// 5 kyu - Scramblies
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  // Start with an object to hold the character count
  const charCount = {}
  
  // Iterate through str1 and add each letter to the object or increment if it already exists
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1
  }
  
  // Iterate through str2 
  for (let char of str2) {
    // if the character's count is more than 1, we will subtract 1 from the count, otherwise
    // return false because the count is zero and we don't have enough of the letters
    if (charCount[char] > 0) {
      charCount[char] = charCount[char] - 1
    } else {
      return false
    }
  }

  // If we make it through the loop without returning false, we can return true
  // because character count was enough
  return true
}

// 4 kyu - Adding Big Numbers
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// - The input numbers are big.
// - The input is a string of only digits
// - The numbers are positives

function add(a, b) {
  while (a.length < b.length) a = '0' + a
  while (b.length < a.length) b = '0' + b
  
  let carry = 0
  let result = []
  
  for (i = a.length - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry
    result.unshift(sum % 10)
    carry = Math.floor(sum / 10)
  }
  
  if (carry > 0) {
    result.unshift(carry)
  }
  
  return result.join('')
}
