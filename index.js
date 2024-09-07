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
  // Pad the front of the shorter string with zeros until they are the same length
  while (a.length < b.length) a = '0' + a
  while (b.length < a.length) b = '0' + b
  
  let carry = 0
  let result = []
  
  // Start loop from the rightmost numbers in string and simulate manually adding the nmbers
  // like we would on paper
  for (i = a.length - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry
    result.unshift(sum % 10) // Add last digit of sum to the front of the array
    carry = Math.floor(sum / 10) // Carry becomes the leading digits of sum
  }
  
  // At the end of the loop, if carry isn't zero, add it to the beginning of the result
  if (carry > 0) {
    result.unshift(carry)
  }
  
  return result.join('') // Join the array back into a string
}


// 7 kyu - New season, new league
// The new football league season is coming and the Football Association need some help resetting the league standings. Normally the initial league standing is done in alphabetical order (from A to Z) but this year the FA have decided to freshen it up.

// It has been decided that team who finished first last season will begin the next season in first place. Regardless of what letter their club begins with. e.g. if Manchester City were in first place last year, they will begin the season in position one. All other teams should be in alphabetical order.

// The teams will be fed in as an object ({}). The key will be will be their position from last season and the value is the club's name e.g. Arsenal.

// The output should be an object ({}) with the key as the club's starting position for the new season and the value should be club's name e.g. Arsenal.

// For example. If in the previous season the standings were:

// 1:'Leeds United' 2:'Liverpool' 3:'Manchester City' 4:'Coventry' 5:'Arsenal'

// Then the new season standings should

// 1:'Leeds United' (first last season) 2:'Arsenal' (alphabetical) 3:'Coventry' (alphabetical) 4:'Liverpool' (alphabetical) 5:'Manchester City' (alphabetical)

function premierLeagueStandings(teamStandings) {
  const sorted = []
  
  // Add teamStandings[2] and up to an array
  for (i=1; i < Object.keys(teamStandings).length; i++) {
    sorted.push(teamStandings[i + 1])
  }
  
  // Sort that array
  sorted.sort()
 
  // set teamStandings[2] to array[0] and so on
  for (i=0; i < sorted.length; i++) {
    teamStandings[i+2] = sorted[i]
  }
  
  return teamStandings
}

// 4 kyu - Sum Strings as Numbers
// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

function sumStrings(a, b) {
  // Remove leading zeros from both strings
  a = a.replace(/^0+/, '');
  b = b.replace(/^0+/, '');

  // If both strings are empty, return '0'
  if (a === '' && b === '') {
    return '0';
  }

  // Pad the shorter string with leading zeros
  while (a.length < b.length) a = '0' + a;
  while (b.length < a.length) b = '0' + b;

  let carry = 0;
  let result = [];

  // Start adding from the rightmost digit
  for (let i = a.length - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 10);  // Calculate carry for the next iteration
    result.push(sum % 10);  // Store the last digit of sum in the result
  }

  // If there's any remaining carry, add it to the front
  if (carry) {
    result.push(carry);
  }

  // The result array is in reverse order, so reverse it back
  return result.reverse().join('');
}

// 4 kyu - Strip Comments
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(text, markers) {
  if (markers.length == 0) {
    return text.trimRight()
  }
  // Split the text into lines
  let lines = text.split("\n");

  // Process each line
  for (let i = 0; i < lines.length; i++) {
    for (let marker of markers) {
      let markerIndex = lines[i].indexOf(marker);
      if (markerIndex !== -1) {
        // Keep everything before the marker and trim trailing spaces after the marker
        lines[i] = lines[i].substring(0, markerIndex).trimRight();
      }
      lines[i] = lines[i].trimRight()
    }
  }

  // Join the lines back together with newline characters
  return lines.join("\n");
}

// 5 kyu - Calculating with Functions
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(op) {return op ? op(0) : 0}
function one(op) {return op ? op(1) : 1}
function two(op) {return op ? op(2) : 2}
function three(op) {return op ? op(3) : 3}
function four(op) {return op ? op(4) : 4}
function five(op) {return op ? op(5) : 5}
function six(op) {return op ? op(6) : 6}
function seven(op) {return op ? op(7) : 7}
function eight(op) {return op ? op(8) : 8}
function nine(op) {return op ? op(9) : 9}

function plus(rightOp) {
  return function(leftOp) {
    return leftOp + rightOp
  }
}

function minus(rightOp) {
  return function(leftOp) {
    return leftOp - rightOp
  }
}

function times(rightOp) {
  return function(leftOp) {
    return leftOp * rightOp
  }
}

function dividedBy(rightOp) {
  return function(leftOp) {
    return Math.floor(leftOp / rightOp)
  }
}