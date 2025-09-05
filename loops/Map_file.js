
const user = new Map;
user.set("Name","Harsh");
user.set("Age",19);
user.set("Email" ,"Harsh@gmail.com");

for (const [key,value] of user) {
     console.log(key,":",value);
}