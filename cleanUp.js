// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName(name) { 
  console.log(`Hello ${name}`)
}

askForName("Ben")
/* Added the name parameter and used string interpolation
 to print "Hello" with the user's name. */ 

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
/* Added console.log statements to function call so that 
the results are printed to console. */

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
/* Changed "func" to "function" in 
function declaration statement */



//  EX 4:
function average(num1, num2) { 
   return ((num1 + num2) / 2)
}

console.log(average(30, 15))
/* Reduced the function logic to one line by using
parentheses and getting rid of the avg and sum variables
Also added console.log statement in function call to display 
result to console. */