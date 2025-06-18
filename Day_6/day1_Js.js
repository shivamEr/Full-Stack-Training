
// console.log(temp);
// var temp = "this is temp";
// console.log(temp);
// Output: undefined, this is temp
// This is because of hoisting in javascript. The variable is declared at the top of the script


// let and const are block scope variables, they are not accessible outside the block
// console.log(temp2);
// let temp2 = "this is temp2";
// console.log(temp2);


let str = "this is a string";
let s = str.replace("is", "at"); // replace first occurrence of "is" with "at"
console.log(s);

let nS = str.replaceAll("is", "at"); // Replace all occurance of "is" with "at"
console.log(nS);

let sts = str.split(" "); // Convert string to array with space as delimiter
console.log(sts);

console.log(str.trim()); // Remove leading and trailing spaces

console.log(str.startsWith("th")); // It checks if string starts with "th"
console.log(str.endsWith("ing")); // It checks if string ends with "ing"

console.log(str.includes("is")); // It checks if string includes "is"
console.log(str.repeat(2)); // It repeats the string 2 times

// console.log(str.padStart(20, " ")); // It adds spaces at the start of
// console.log(str.padEnd(20, " ")); // It adds spaces at the end of

// console.log(str.localeCompare("this is a string")); // It compares two strings and returns a
// console.log(str.codePointAt(0)); // It returns the unicode of the character at th
// console.log(str.charCodeAt(0)); // It returns the ascii value of the character at th
// console.log(str.normalize()); // It returns the normalized form of the string
// console.log(str.search("is")); // It returns the index of the first occurrence of "is
// console.log(str.match("is")); // It returns an array of all occurrences of "is"

