// Creating an object 'employes' with key–value pairs (properties)
const employes = {
    name: "Aman",                         // Employee's name (string)
    compnay: "Microsoft",                 // Employee's company (string)
    Salary: "100000$",                        // Employee's salary (number)
    designation: "Devloper",              // Employee's designation (string)
    email: "employe_aman@gmail.com",      // Employee's email (string)

    // Adding a method (function as a property) inside the object
    Greet: function() {
        // 'this' refers to the current object 'employes'
        // Returning a formatted string using template literals
        return `Hello I'm ${this.name}, working at ${this.compnay}`;
    }
};

// Calling the Greet() method of the 'employes' object
// console.log prints the returned string from the method
console.log(employes.Greet());
