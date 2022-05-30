// //Convert number to reversed array of digits
// function digitize(n) {
//   return n
//     .toString()
//     .split("")
//     .reverse()
//     .map((i) => {
//       return Number(i);
//     });
// }
// console.log(digitize(348597));

// //To square(root) or not to square(root)
// function squareOrSquareRoot(array) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Math.sqrt(array[i]) === Math.floor(Math.sqrt(array[i]))) {
//       newArr.push(Math.sqrt(array[i]));
//     } else {
//       newArr.push(array[i] * array[i]);
//     }
//   }
//   return newArr;
// }
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

// const xMarksTheSpot = (input) => {
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] !== "x") {
//       return [];
//     }
//     if (input[i] === "x" > 1) {
//       return [];
//     }
//     if (input[0][0] === "x") {
//       return [0, 0];
//     }
//   }
//   if (input.length === 0) {
//     return [];
//   }
// };

// let matrix = [
//   ["x", "o"],
//   ["o", "o"],
// ];
// console.log(matrix[0][0]);
// for (let i = 0; i < matrix.length; i++) {
//   console.log(matrix[i]);
// }

//Removing Elements
// function removeEveryOther(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }

// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// const person = {
//   name: "name1",
//   lastName: "LastName",
//   age: 18,
// };

// let arr = [];

// const oblectToArray = (obj) => {
//   for (let key in obj) {
//     arr.push({ key: key, value: obj[key], type: typeof obj[key] });
//   }
//   return arr;
// };

// const newFun = oblectToArray(person);
// console.log(newFun);
