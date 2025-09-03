// 🔹 Function declaration of 'outer'
function outer() {
    // When 'outer' is called, this message prints
    console.log("outer funtion");

    // Variable declared with const → block scoped, cannot be reassigned
    const score = 22;

    // 🔹 Function declaration inside another function (nested function)
    // → This creates a closure, because 'inner' can access
    //    variables from 'outer' (like 'score')
    function inner() {
        // Executes when 'inner' is called
        console.log("inner function");

        // Accessing variable 'score' from outer function's scope
        // → This demonstrates closure (scope chain in action)
        console.log(score);
    }

    // Calling inner function inside outer
    // → Runs immediately when outer executes
    inner();
}

// 🔹 Calling outer function
// → Creates an execution context for 'outer'
// → Declares 'score' and 'inner', then executes 'inner'
// outer();   // Uncomment to see output
//-------------------------------------------------------------

// 🔹 Example of block scope using if conditions
if (true) {
    const usernmae = "Harsh-chauhan"; // Block scoped (only inside this if)

    if (usernmae === "Harsh-chauhan") {
        const instaPage = " Defent.404"; // Block scoped (only inside this inner if)
        console.log(usernmae + instaPage); // ✅ Works → both variables are in scope
    }

    // console.log(instaPage); 
    // ❌ Error → instaPage is NOT accessible here
    // because it is declared in the inner if-block only
}

// console.log(usernmae);
// ❌ Error → usernmae is NOT accessible here
// because it is declared in the outer if-block only
