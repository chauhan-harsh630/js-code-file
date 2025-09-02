function add(a ,b){
   let sum = a+b;
   return sum;
}

// console.log(add(67,89));

function calculateCartPrice(...itme){
   // const add = itme.reduce((acc,curr)=>acc+curr ,0)
   let total = 0;
   for(let i = 0;i<itme.length;i++){
      total+=itme[i];
   }
   console.log(`cart itme price,${total}`)
}

// calculateCartPrice(200,389,34,266,120);

const Uid = {
   username: "chauhan-harsh630-git",
   password:  "karan123@3",
}
function passingToObject(anyobject){
    console.log(`Username is ${anyobject.username} and password ${anyobject.password}`)
}
// passingToObject(Uid);

// “Passing objects to functions using object literals in JavaScript”.


passingToObject({
   username: "Harsh_chaun604",
   password: "Harsh123@H",
});
passingToObject(Uid);


const myArray = [200,300,100,250];

function returnSeonedArray(getarray){
   return getarray[2];
}

console.log(returnSeonedArray(myArray));