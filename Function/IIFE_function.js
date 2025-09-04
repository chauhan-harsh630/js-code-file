// ✅ Normal Function IIFE
// This function is defined and immediately invoked
(function greet(name) {
    console.log(`Hello, Good Morning, ${name}`);
})("Harsh");   // <-- Passing "Harsh" as argument

// Output: Hello, Good Morning, Harsh


// ✅ Arrow Function IIFE (Modern Style)
// Same idea, but using arrow function syntax
((get) => {
    console.log(`Hey, ${get} I am from arrow function`);
})("Harsh");   // <-- Passing "Harsh" as argument

// Output: Hey, Harsh I am from arrow function
