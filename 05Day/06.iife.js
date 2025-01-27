// IIFE - immediately invoked function expression

(function chai () {
    //named IIFE
    console.log("DB Connected")
})();

// 

(  (name) => {
    // unnnamed IIFE
    console.log(`DB Connected ${name}`)
})('vaibhav');



// Avoiding Global Scope Pollution:

// Variables declared inside the IIFE are not added to the global scope. This helps in preventing naming conflicts with other scripts and libraries.
// Encapsulation:

// It allows encapsulation of variables. Variables declared inside the IIFE are not accessible from the outside, providing a level of privacy.
// Isolation:

// It helps in isolating code. Variables declared inside the IIFE do not interfere with variables in the outer scope, and vice versa.
// Module Pattern:

// IIFE is often used in creating a module pattern, allowing the creation of private and public methods within the same scope.
// Avoiding Hoisting Issues:

// By using a function expression, you avoid hoisting issues that can occur with function declarations.
// Immediately Invoked Function Expression (IIFE) - Named IIFE