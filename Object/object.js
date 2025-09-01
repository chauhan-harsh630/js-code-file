// In JavaScript, an object is a collection of key–value pairs (also called properties).

// The key (or property name) is always a string (like "name" or "Age").
// The value can be anything: string, number, boolean, array, another object, or even a function.
const student = {
    name: null,
    Age: null,
    Roll_No: null,
    email_id: "null"
}
// console.log(student);
student.name = "Akshay";
student.Age = 19;
student.Roll_No = 10;
student.email_id = "akshay@gmail.com";


// Adding New Properties
student.course  ="B-tech";
student.fee = 50000;
console.log("A ",student);

//Deleting Properties
delete student.fee;
console.log("B ",student);
// Objects group data together.
// Properties = attributes, Methods = behaviors.
// You can create, read, update, and delete properties anytime.