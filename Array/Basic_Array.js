const myArr = [0,1,2,3,4,5,6,7];
// console.log(myArr);
// myArr.push(8);
// myArr.push(9);
// myArr.pop();
// console.log(myArr);
let index = 2;
// console.log(`An index of ${index} returns ${myArr.at(index)}`);
const animal = ["Elelphant","Giraffe","Dog","Cat","Lion","Tiger"];
// console.log("A ",animal);
// console.log(animal.slice(1,3));

// console.log("B " , animal);
// console.log(animal.splice(1,3));

// console.log("C ",animal);
// console.log(animal.toString());
let arr = [5,3,7,2,1,6,4];
let newArr = arr.sort();
// console.log(newArr);


 const itreater = animal.values();
 for(const anim of itreater){ 
    // console.log(anim);
}

const Marval_Heros = ["Ironman","Spiderman","Thore"];
const DC_Heros = ["Batman","Flash","Superman"];

// const all_heros = Marval_Heros.concat(DC_Heros);
// console.log(all_heros);
const all_heros = [...Marval_Heros,...DC_Heros];
// console.log(all_heros);

let NewArray = [1,2,3,5,[4,5,6],[6,4,6,[9,5,1]]];
console.log(NewArray.flat(Infinity));