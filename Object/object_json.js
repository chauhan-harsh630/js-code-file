//JSON stands for JavaScript Object Notation.
// It’s a lightweight data format used to store and exchange information between applications (especially between client and server).
// {
//     "name": "Harsh",
//     "email":"Harsh@gmail.com",
//     "uid": "chauhan-harsh630 Git",
// }
//JSON keys must be in double quotes " ".

// JSON only allows values like:

// string, number, boolean, array, object, null

// No functions allowed inside JSON.

const user = {name:"Harsh",email:"Harsh@gmail.com",age:19,}
const Jsonstring = JSON.stringify(user);
// console.log(Jsonstring);

const jsonData = `{"uid": "chauhan-harsh630-git","password":"karan123@"}`;
const obj = JSON.parse(jsonData);
console.log(obj.uid);