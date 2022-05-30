let obj = {
  name: "Вася",
  age: 23,
};

let obj2 = { ...obj };

console.log(obj, obj2);

obj2.profi = "electric";

console.log(obj, obj2);
let obj3 = {};
Object.assign(obj3, obj2);
console.log(obj3);
obj3.maried = true;
console.log(obj2);
console.log(obj3);
console.log(obj2 === obj3);
