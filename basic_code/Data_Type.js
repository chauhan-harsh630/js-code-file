// 1. Primitive Data Types (Immutable – stored directly in memory)
//Number represent Integer& Float
let age = 21;       // integer
let pi = 3.14;      // decimal

// String → sequence of characters (text).
let Name = "Harsh";
let greeting = 'Hello!';

// Boolean → represents true or false.
let isStudent = true;
let isLoggedIn = false;

// Undefined → declared but not assigned a value.
let city;   // undefined
// Null → intentional empty value.
let accountBalance = null;  // no value assigned

// Symbol (ES6) → unique and immutable value, mostly for object keys.
let id = Symbol("uniqueId");
// BigInt (ES11) → for very large numbers beyond Number limit.
let bigNumber = 123456789012345678901234567890n;


console.log([age,pi,Name,greeting,isStudent,isLoggedIn,city,accountBalance,id,bigNumber]);
