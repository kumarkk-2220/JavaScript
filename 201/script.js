// let num = "0";
// console.log(typeof num);
// console.log(num == "0");
// console.log(num == 0);
// //script comparison
// console.log(num === 0);
// console.log(num === "0");

//Call back functions
//using settimeout

// console.log("Printing the first line");
// setTimeout(function () {
//     console.log("Printing second line after 5000 ms of wait");
// }, 5000);
// console.log("Printing the third line");

// // strict mode
// "use strict";
// let x = "something";
// console.log(x);
// x = "somethig new";
// console.log(x);

// timeouts and intervals
// setting a time interval for every 3 seconds

// setInterval(function () {
//     console.log("Checking Something...");
// }, 3000);

// // if we want to set only particular no.of times..
// let count = 0;
// myInterval = setInterval(function () {
//     console.log("Checking Something...");
//     count++;

//     if (count === 3) {
//         clearInterval(myInterval);
//         console.log("Execution is completed");
//     }
// }, 3000);

// // while Loops
// let num = 0;
// while (num < 100) {
//     console.log(num);
//     num++;
// }

// // Guessing game using JavaScript
// while (true) {
//     let custName = prompt("What is your name?".toLowerCase());
//     if (custName == "Kp Kumar".toLowerCase()) {
//         console.log("Correct Guess");
//         break;
//     } else {
//         console.log("Not right!, Keep guessing");
//     }
// }

// // Date Formatting in JS
// const d = new Date(2022, 0, 20);
// console.log(d);
// console.log(d.getDate());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
// ];
// console.log(months[d.getMonth()]);

// // destructuring arrays and objects
// // destructuring array
// const months = ["January", "February", "December"];
// const [jan, feb] = months;
// console.log(jan, feb);
// console.log(months);

// // destructuring object
// person_details = { personName: "Kp Kumar", age: 29, qualification: "B.tech" };
// const { personName, qualification } = person_details;
// // go to console now and type personName

// // deleting object properties
// obj = { name: "Kp Kumar", age: "jaslj", qualification: "B.tech" };
// delete obj["age"];
// console.log(obj);

// // Generating random numbers in Javascript
// num = Math.random() * 100; //to generate random numbers from 1-100
// console.log(num);

// num2 = Math.floor(Math.random() * 100);
// console.log(num2);

// // Guessing game with random number

// count = 0;
// while (true) {
//     let randomNumber = Math.ceil(Math.random() * 10);
//     console.log(randomNumber);
//     let guessNumber = Number(prompt("Enter any number between 1 to 10"));
//     if (guessNumber === randomNumber) {
//         alert("You are in!..");
//         break;
//     } else {
//         console.log("Not in yet. try once more!");
//         count++;
//     }

//     if (count == 3) {
//         console.log("Chances are done@");
//         break;
//     }
// }
// // Try, Catch & Finally

// const num = 10;
// try {
//     num = num + 10;
// } catch (error) {
//     console.warn("ERROR LOGGING:", error);
// } finally {
//     console.log("The final number is: ", num);
// }

// console.log("Show me!!");

// // Using 'this'
// const person5 = {
//     name: "Kp Kumar",
//     speak() {
//         console.log(`My name is: ${this.name}`);
//     },
// };

// console.log(person5.speak());

// function counter() {
//     if (this.total === undefined) {
//         this.total = 1;
//     } else {
//         this.total++;
//     }
//     console.log(`The running total is: ${this.total}`);
// }

// console.log(counter());

// //Arrow Functions
// // Normal function
// const hello = function () {
//     return "Hello Kp!";
// };

// const greeting = hello();
// console.log(greeting);

// // using arrow functions
// const greet = () => {
//     return "Hello Arrowed Kp!";
// };

// console.log(greet());

// // another way of using arrow function
// const myGreeting = () => "Hello Kp! from shorter Arrow function";

// console.log(myGreeting());

// // another arrow function example
// const newGreeting = (custName) =>
//     `Welcome to the parameters in arrow functionis, ${custName}`;

// const userPrompt = prompt("Enter you name");
// console.log(newGreeting(userPrompt));

// // Classes in JavaScript
// class MyClassname {
//     userName(name) {
//         this.name = name;
//     }
//     speak() {
//         if (this.name === undefined) {
//             this.name = "Unnamed thing";
//         }
//         return `Hi. How are you?, asked by ${this.name}`;
//     }
// }

// const thing = new MyClassname();
// thing.userName("Kp");
// console.log(thing.speak());

// // Class Constructors
// class MyNewClass {
//     constructor(name) {
//         this.name = name;
//     }

//     greeting() {
//         return `Hello from ${this.name}`;
//     }
// }

// const yourName = new MyNewClass("Kp!");
// console.log(yourName.greeting());

// class AnotherClass {
//     constructor(custName, custAge) {
//         this.custName = custName;
//         this.custAge = custAge;
//     }
//     details() {
//         return `Name of the user is ${this.custName} and the age is ${this.custAge}`;
//     }
// }

// // const Person = new AnotherClass("'Kp'", 28);
// // console.log(Person.details());

// fetch("https://swapi.dev/api/people/1")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
