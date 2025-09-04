//What is Execution Context?

//An execution context is an environment where JavaScript code is evaluated and executed.
// 👉 The Global Execution Context (GEC) is the default context created when the JavaScript program first runs.


var Name = " Harsh";

function greet(){
    console.log("Hello, Good morning" + Name);
}

// greet();

// name = "Harsh" is assigned.
// greet() is called → a new Function Execution Context (FEC) is created for greet.

// Inside greet(), it logs "Hello, Harsh".

console.log(this);

// this in browser GEC → window

// this in Node.js GEC → {}