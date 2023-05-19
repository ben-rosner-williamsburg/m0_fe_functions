// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Hello stranger!";
}
console.log(greeting());
// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Hello ${name}! `;
}
console.log(customGreeting("Ben"));
// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName) {
    return `Welcome to Turing - ${firstName} ${middleName} ${lastName}!`
}
console.log(greetPerson("Benjamin", "Jordan", "Rosner"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
    return `Your number squared is ${num * num}`;
}
console.log(square(32));

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(amount, item) {
    if (amount >= 4) {
        return `${item} is stocked`
    }
    else if (amount >= 1 && amount <= 3) {
        return `${item} - running LOW`
    }
    else {
        return `${item} - OUT of stock!`
    }
}
console.log(checkStock(4, "Coffee"));
// => "Coffee is stocked"

console.log(checkStock(3, "Tortillas"));
// => "Tortillas - running LOW"

console.log(checkStock(0, "Cheese"));
// => "Cheese - OUT of stock!"

console.log(checkStock(1, "Salsa"));
// => "Salsa - running LOW"