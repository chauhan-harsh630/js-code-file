// Fast, simple, small space.

// Stores primitive data types (Number, String, Boolean, null, undefined, Symbol, BigInt).

// Stores function calls and local variables.

// Works on LIFO (Last In, First Out) principle.
// ➡️ When you assign a primitive value to a variable, the actual value is stored directly in the stack.

let a = 10; //number => is store in directly in stack
let b = a;  //copy of value is made
b = 20;

console.log(a);// output 10 (not affected)
console.log(b);// output 20