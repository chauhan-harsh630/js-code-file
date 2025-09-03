{
    const score = 33;
}

// console.log(score); 
// ❌ Error: score is not defined 
// because const has **block scope**

{
    let score = 88;
}
// console.log(score);
// ❌ Error: score is not defined 
// because let also has **block scope**


// ✅ const & let → Block scope (modern, safe, recommended)

{
    var score = 22;
}
// console.log(score);  
// ✅ Output: 22 
// because var is **function scoped**, NOT block scoped
// (var escapes from the block)


// Example with if block
if (true) {
    const Name = "Harsh";
    let age = 19;
}

// console.log(Name, age);
// ❌ Error: Name and age are not defined 
// because const and let are **limited to the if block**
