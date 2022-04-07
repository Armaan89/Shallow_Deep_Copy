/* 
A deep copy means that all of the values of the new variable
 are copied and disconnected from the original variable.
*/

/* 
A  shallow copy means that certain (sub-)values are still 
connected to the original variable.
*/
const a = 5;
let b = a; //this is copy
b = 6; //re assign
console.log("a: ", a);
console.log("b: ", b);
console.log("===============");
//shallow copy

const abc = {
  fname: "Jafar",
  lname: "khan"
};
console.log(abc);

let xyz = abc;
console.log(xyz);

xyz.fname = "Ibrahim";
console.log(xyz);

//deep copy

/*
const abc = {
  fname: "Jafar",
  lname: "khan"
};
console.log(abc);

//let xyz={...abc};  //using spread
let xyz = Object.assign({}, abc); // using second way
console.log(xyz);

xyz.fname = "Ibrahim";

console.log(abc.fname);
console.log(xyz.fname);

*/

console.log("===============");
//When you have a nested object (or array) and you copy it,
//nested objects inside that object will not be copied, since they
// are only pointers / references. Therefore, if you change the
//nested object, you will change it for both instances,
//meaning you would end up doing a shallow copy again.
/* */
const aa = {
  foods: {
    dinner: "Biryani"
  }
};
console.log(aa.foods.dinner);

let bb = { ...aa };
//console.log(bb.foods);
bb.foods.dinner = "Juice";
console.log(aa.foods);
console.log(bb.foods);

console.log("===============");
//To make a deep copy of nested objects,
/*
let bbb = { foods: { ...a.foods } };

bbb.foods.dinner = "Ice cream";
console.log(aa.foods);
console.log(bbb.foods);
*/
console.log("===============");
//when objet has more keys
/*
let bbc = { ...aa, foods: { ...aa.foods } };
bbc.foods.dinner = "alochol";
console.log(aa.foods);
console.log(bbc.foods);
console.log("===============");

*/

//make a deep copy without thinking
//. You simply stringify your object and parse it right after:
/*
let deepCopy = JSON.parse(JSON.stringify(aa));
console.log(deepCopy);
deepCopy.foods.dinner = "Dieting..!";
console.log(aa.foods);
console.log(deepCopy.foods);
console.log("===============");
*/
