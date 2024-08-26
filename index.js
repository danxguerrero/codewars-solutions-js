// 8 kyu Sum without highest and lowest number

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

// 8 kyu Short Long Short

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

// 7 kyu Testing 1-2-3

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

// 8 kyu Grader


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