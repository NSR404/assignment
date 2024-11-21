// Task 4 : 
// Create a TypeScript interface for a Product with the following properties:
// name: string
// price: number
// Write a function that:
// Accepts an array of Product objects.
// Returns the total price of all products.
// Function to calculate total price of products
function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var products = [
    { name: "Banana", price: 100 },
    { name: "Orange", price: 10 },
    { name: "Apple", price: 50 }
];
console.log(calculateTotalPrice(products));
//#######################//
//#######################//
// Task 5: 
// Write a TypeScript function that accepts a string and checks if it is a valid email address. You can assume the email should have a basic structure like username@domain.com. Use regular expressions to implement this.  
function ValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
console.log(ValidEmail("abdulwadood@domain.com"));
console.log(ValidEmail("abd-alwadood"));
