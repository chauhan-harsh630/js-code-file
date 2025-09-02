// Creating Instagram object using Object constructor
const Instagram = new Object({
    userName: "defend.404",
    password: "Harsh123@",
    contact:{
        email: "harsh@gmail.com",
        mobile_no: 9658975962,
    },
});

// Accessing values
// console.log(Instagram.userName);          // defend.404
// console.log(Instagram.contact.email);     // harsh@gmail.com
// console.log(Object.values(Instagram));
// console.log(Object.keys(Instagram));//print keys an Array form
// console.log(Object.keys(Instagram.contact));//print keys an Array form 

for(let[keys,value] of Object.entries(Instagram.contact)){
    // console.log(keys,":",value);
}
for(let[keys,value] of Object.entries(Instagram)){
    // console.log(keys,":",value);
}

const UId={
    userId: "chauhan-harsh630_GIThub" ,
    pass: "Karn123@",
    Email:" karan@chauna_gmail.com",
}

const {userId: uid} = UId;
console.log(uid);