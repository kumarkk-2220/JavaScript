// // var website = "https://www.codingforeveryone.com";
// // var teacherName = "Kalob";

// // console.log(teacherName);
// // console.log(website);

// // // variables
// // let apples = 6;
// // const height = "6'0\"";

// // // let and constant are scoped variables. they can't live after the scope is completed
// // if (teacherName == "Kalob") {
// //   let apples = 6;
// //   const height = "5'9\"";
// //   console.log("I have ", apples, "apples");
// //   console.log(teacherName, "height is ", height);
// // }

// // Operators
// console.log("Operatros are: + - * / = ++ --");

// // Data Structures - Data Types
// const str = "String"; //string
// const num = 3; //Number
// const flt = 3.14; //Floats
// const bool = true;
// const nothing = null;
// const notDefined = undefined;
// const getAge = function () {
//   return 31;
// };

// const obj = {
//   myname: "Kp",
//   myProfession: "PM",
// }; //Obj can be accessed with obj['name']

// Conditional Statements
// const myAge = 29;

// if (myAge >= 18) {
//   //execute this
//   console.log("Eligible for vote");
// }
// if (myAge >= 21) {
//   console.log("Eligible for alcholol drinks too");
// } else {
//   consle.log("Not eligible at all");
// }

// // else if

// const userName = "Prasna";
// if (userName == "Prasanna") {
//   console.log("Hey, Prasanna!");
// } else if (userName == "Kp") {
//   console.log("Hey, Kp");
// } else {
//   console.log("Hey, Guest");
// }

// DOM & Callling elements by their IDs
//refer to the box id in the html
//inspect-> in console, try below codes
// const box1 = document.getElementById("box");
// console.log(box1);

// const box2 = document.getElementById("box2");
// box2.innerText = "This is something new in box 2";

// const box3 = document.getElementById("box3");
// box3.innerHTML =
//   "This is something <strong>new</strong> in box3 but <strong>new</strong> is bolded";

// Objects
// Objects are a way to make a variable inside other variable
// let person = {
//   userName: "Kp Kumar",
//   profession: "TechPM",
//   age: 29,
//   gender: "M",
// };

// console.log(person["age"]);
// console.log(person["userName"]);
// console.log(person["profession"]);

// // String Methods
// const course = "JavaScript 101: Coding for begginers";
// console.log(course);
// //search for a text
// console.log('The word "Coding" found at: ', course.search("Coding"));
// console.log("course[0]", course[0]);
// // Slicing
// console.log(course.slice(16, 22));
// // substring
// console.log(course.substring(16, 22));
// // Replacing
// console.log(course.replace("Coding", "Programming"));
// // to uppercase
// console.log(course.toUpperCase());
// console.log(course.toLowerCase());
// //
// const spaces = "  trailing spaces  ";
// console.log(spaces.trim());
// // split
// words = course.split(" ");
// console.log(words);
// console.log(typeof words);
// // Length
// console.log(course.length);

// Casting the datatypes
// age = "31";
// console.log(typeof age);
// console.log(typeof Number(age));

// String Concatenation
// myName = "Kp Kumar";
// myAge = 31;
// console.log("My name is", myName, "and my age is", myAge);
// console.log(`My name is ${myName} and my age is ${myAge}`);

// //Arrays
// lst = ["One", 2, 3.0, "Four", [], {}];
// console.log(lst);
// console.log(typeof lst);
// lst.push("New item pushing");
// console.log(lst);
// const newItem = lst.pop();
// console.log(lst);
// console.log(newItem);

// Iterating over an array
// const arr = ["Zero", "One", "Two", "Three"];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((num) => {
//   console.log(num);
// });

// Selecting multiple DOM nodes
// refer to the classnames in the html file
// const elems = document.querySelectorAll(".this-class");
// console.log(elems);

// // single node selector
// console.log(document.querySelector(".this-class").innerText);

// // iterations through elements
// element = document.querySelectorAll("li");
// console.log(element);

// element.forEach((node) => {
//   node.innerText = "This is changed now!";
// });

// // iterating with index on nodes
// element.forEach((node, index) => {
//   node.innerText = `This is element ${index}`;
// });

// // iterating with index on nodes
// element.forEach((node, index) => {
//   node.innerText = `This is element ${index + 1}`;
// });

// // adding a class to the existing node
// element.forEach((node) => {
//   node.classList.add("custom-class", "second-class");
// });

// //functions
// function addition(num1, num2) {
//   const total = Number(num1) + Number(num2);
//   return total;
// }

// const add = addition(1, 9);
// console.log(add);

// function multi(n1, n2) {
//   return n1 * n2;
// }

// console.log(multi(1, 10));

// // Rest operator
// function addNumbers(greetingName, ...numbers) {
//   let total = 0;
//   for (index in numbers) {
//     total = total + numbers[index];
//   }
//   return `Hello ${greetingName}, total is ${total}`;
// }

// console.log(addNumbers("Kp", 1, 2, 3, 4, 5));

// objects with Functions
const persons = {
  custName: "Kp Kumar",
  age: 29,
  favFood: "Pizza",
  speaks: function () {
    console.log("Telugu");
  },
};

persons.speaks();

const persons2 = {
  custName: "Kp Kumar",
  age: 29,
  favFood: "Pizza",
  speaks: function (speaks = "English") {
    console.log(`Telugu as well as ${speaks}`);
  },
};

persons2.speaks();

const persons3 = {
  userName: "Kp Kumar",
  userAge: 29,
  userYearofBirth: function (year = 0000) {
    console.log(year);
  },
};

persons3.userYearofBirth(1993);
