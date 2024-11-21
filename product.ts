// Task 4 : 
// Create a TypeScript interface for a Product with the following properties:
// name: string
// price: number
// Write a function that:
// Accepts an array of Product objects.
// Returns the total price of all products.

// Define the product interface
   interface Product {
         name: string;
         price: number;
   }

   // Function to calculate total price of products
   function calculateTotalPrice(products: Product[]): number {
         return products.reduce((total, product) => total + product.price , 0);
   }

   const products : Product[] = [
         { name: "Banana" , price: 100 },
         { name: "Orange" , price: 10 },
         { name: "Apple" , price: 50 }
   ];

   console.log(calculateTotalPrice(products));




//#######################//
//#######################//


// Task 5: 
// Write a TypeScript function that accepts a string and checks if it is a valid email address. You can assume the email should have a basic structure like username@domain.com. Use regular expressions to implement this.  

function ValidEmail(email: string): boolean {
      const ValidEmails = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return ValidEmails.test(email);
  }
  

  console.log(ValidEmail("abdulwadood@domain.com")); 
  console.log(ValidEmail("abd-alwadood"));    
  

//#######################//
//#######################//


//   TypeScript is an extension to JavaScript that provides additional features such as static typing.
//   - Steps to run the code:
// 1- Install TypeScript using npm:
// npm install -g typescript

// 2- Compile the code to JavaScript
// tsc app.ts

// 3- Run the resulting file using Node.js
// node app.js