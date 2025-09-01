const student =[
    {name: "Harsh", Age: 19, Roll_no: 15, email: "Harsh@gmail.com",},
    {name: "Akshay", Age: 19, Roll_no: 16, email: "Akshay@gmail.com",}
];
//Arrays of objects → to represent multiple students.

// Adding new property to each object
student[0].course="BCA"
student[1].course="BCA"
// 🔹 What’s Happening?

// student is an array → It stores multiple objects.

// student[0] → first object (Harsh)

// student[1] → second object (Akshay)
// You then added a new property (course) to both objects.
console.log(student[0]);
// console.log(student[0]); prints Harsh’s object.
console.log(student[1]);
// console.log(student[1]); prints Akshay’s object.
student.forEach(stud => {
  console.log(`Name: ${stud.name}, Roll No: ${stud.Roll_no},Email: ${stud.email} Course: ${stud.course}`);
});
