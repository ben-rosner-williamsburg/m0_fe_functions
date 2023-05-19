// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
console.log("Hello World".toLowerCase());

/*  The .includes method is looking to see if the
string "Hello" is part of the string "Hello World".
The return value is the boolean true. */
console.log("Hello World".includes("Hello"));

/* The .endsWith method is checking if the string "Hello World"
ends with the word "Hello". The return value is the boolean false. */

console.log("Hello World".endsWith("Hello"));

/* The .ends with method is checking if the string "Hello World" ends
with the letters "rld". The return value is the boolean true. */

console.log("Hello World".endsWith("rld"));



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var guitarist = "Trey Anastasio";
var bassist = "Mike Gordon";

/* The length method is checking the number of letters
that are in the string "Trey Anastasio". The return value will be 14. */
console.log(guitarist.length)

/* The split method is splitting the string "Mike Gordon" into 
two distinct strings based on the delimiter value of the space between the two words.
It then puts them in an array.  The return value is the array. */

console.log(bassist.split(" "));


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var vegetables = ["lettuce", "tomato", "carrots"];
var movies = ["Seven Samurai", "The 400 Blows", "The Seventh Seal"];

/* The reverse method reverses the order of the contents of an array. It then returns that array */

console.log(vegetables.reverse());

/* The push method adds a new element to the end of a previously exisitng array. The return value
is the number of elements in that array after the element is added. */

console.log(movies.push("The Lady Vanishes"));
