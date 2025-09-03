// 🔹 Example 1: var
// console.log(a); // ✅ undefined
var a = 10; 
// var → hoisted to the top and initialized as `undefined` immediately.
// That’s why accessing `a` before assignment gives `undefined` (not error).


// 🔹 Example 2: let
let Name; 
// let → hoisted too, but kept in Temporal Dead Zone (TDZ).
// Becomes accessible only after this line runs.
// console.log(Name); // ✅ undefined (because we declared `Name` but not assigned yet)
Name = "Harsh";


// 🔹 Example 3: Function Declaration
console.log(addone(5)); // ✅ Works, prints 6
function addone(num) {
    return num + 1;
}
// Function declarations are fully hoisted (name + body).
// So you can call them even before their definition.


// 🔹 Example 4: Function Expression with const
// console.log(addtwo(6));
// ❌ ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num) {
    return num + 2;
};
// Here `addtwo` is a const variable (block scoped).
// The declaration is hoisted, but kept in TDZ (Temporal Dead Zone)) until this line runs.
// So you CANNOT call it before this line.
