// 🔹 1. Arithmetic Operators (used for calculations)
let a = 10, b = 3;
console.log(a + b);  // 13  (Addition)
console.log(a - b);  // 7   (Subtraction)
console.log(a * b);  // 30  (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1   (Modulus / Remainder)
console.log(a ** b); // 1000 (Exponentiation → 10^3)

// 2. Assignment Operators
let x = 5;
x += 2;  // x = x + 2 → 7
x -= 1;  // x = x - 1 → 6
x *= 3;  // x = x * 3 → 18
x /= 2;  // x = x / 2 → 9
x %= 4;  // x = x % 4 → 1

// 3. Comparison Operators (return true or false)
 a = 5, b = "5";
console.log(a == b);   // true   (loose equality → checks only value)
console.log(a === b);  // false  (strict equality → checks value + type)
console.log(a != b);   // false  (not equal)
console.log(a !== b);  // true   (strict not equal)

console.log(a > 3);   // true
console.log(a < 10);  // true
console.log(a >= 5);  // true
console.log(a <= 4);  // false

// 🔹 4. Logical Operators
 x = true
let y = false;
console.log(x && y);  // false (AND → both true)
console.log(x || y);  // true  (OR → at least one true)
console.log(!x);      // false (NOT → reverses boolean)

// 🔹 5. Unary Operators
let num = 5;
console.log(++num); // 6 (Pre-increment → increases first, then uses)
console.log(num++); // 6 (Post-increment → uses first, then increases)
console.log(--num); // 6 (Pre-decrement)
console.log(num--); // 6 (Post-decrement)

// 🔹 6. Ternary Operator (shortcut for if-else)
    let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"

// 🔹 7. Bitwise Operators (work at binary level)
console.log(5 & 1);  // 1  (AND)
console.log(5 | 1);  // 5  (OR)
console.log(5 ^ 1);  // 4  (XOR)
console.log(~5);     // -6 (NOT → flips bits)
console.log(5 << 1); // 10 (Left shift)
console.log(5 >> 1); // 2  (Right shift)
