// let arr = [1,2,3]
// arr.__proto__.push = () =>{
//     console.log("aan")
// }
// arr.push()

// Array.prototype

//Factory function
// const PersonMaker = (name, age) => {
//   let person = {
//     name: name,
//     age: age,
//     special() {
//       console.log(`hello ${this.name}`);
//     },
//   };
//   return person;
// };

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.hello = () => {
//   console.log(`hello ${this.name}`);
// };

// let p1 = new Person("naman", 23);
// let p2 = new Person("neha", 43);

// let p1 = PersonMaker("adam", 23);
// p1.special();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk() {
//     console.log(`hello ${this.name}`);
//   }
// }

// let p1 = new Person("naman", 22);
// let p2 = new Person("neha", 22);

// class School {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     talk(){
//         console.log(`the name is ${this.name}`)
//     }
// }

// class Student extends School {
//   constructor(name, age, marks) {
//     super(name,age)
//     this.marks = marks;
//   }
// }

// let p1 = new Student("naman", 23, 88);

//Strings
// let names = "namanrai";

// final = [july,june,march,august]

// let arr1 = ["january", "july", "march", "august"];
// let arr2 = ["january", "july", "march", "august"];
// arr1[0] = "july";
// arr1[1] = "june";
// console.log(arr1);

// for (let i = 10; i > 0; i--) {
//   console.log(i*3);
// }

// let movie = "kgf";

// let user = prompt("Enter yor movie");

// while (user != movie && user != "quit") {
//   user = prompt("wrong guess try again");
// }

// if (user === movie) {
//   console.log("you guess a right");
// } else {
//   console.log("quiting...");
// }

// let arr = [1, 2, 3, 4, 5];
// for (let name of arr) {
//   let names = name+" naman"
//   console.log(names)
// }

// const post = {
//   username: "namanrai",
//   content: "This is content",
//   likes: "5k",
//   tags: ['neha','nidhi','rhea']
// }
// post.name = "lara"
// console.log(post)

// let arr = [
//   {
//     name: "naman",
//     city: "silvassa",
//   },
//   {
//     name: "jayana",
//     city: "silvassa",
//   },
//   {
//     name: "meenaxi",
//     city: "silvassa",
//   },
// ];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let user = prompt("Enter your number");
// let rand = Math.floor(Math.random() * user + 1);

// let guess = prompt("Enter the num");

// while (true) {
//   if (guess === "quit") {
//     console.log("quiting...");
//     break;
//   }

//   if (guess === rand) {
//     console.log("wow you guss it right", rand);
//     break;
//   } else if (guess > rand) {
//     prompt("Too high..");
//   } else if (guess < rand) {
//     prompt("Too low...");
//   } else {
//     prompt("try gaian...");
//   }
// }

// function sum(n) {
//   let sum = 0;

//   for (let i = 0; i < n; i++) {
//     sum = sum + i;
//     console.log(i);
//   }

//   return sum;
// }
// console.log(sum(5));

// let str = ["neha", "naman"];

// function join(str) {
//   let final;
//   for (let val of str) {
//     final += val;
//   }
//   return final;
// }
// console.log(join(str));

//Higher Order Function

// function multiple(func, num) {
//   for (let i = 1; i <= num; i++) {
//     func();
//   }
// }
// let greet = () => {
//   console.log("hello");
// };

// function factory(n) {
//     if(n==="even"){
//         return function(){
//             n%2==0
//         }
//     } else if(n==="even"){
//         return function(){
//             n%2!=0
//         }
//     }else{
//         console.log("wrong")
//     }
// }

// const calc = {
//     add(a,b){
//         return a+b
//     }
// }

// let id = setInterval(() =>{
//     console.log("naman")
// },2000)

let arr = [1, 2, 3, 4];

// arr.forEach((index,val) =>{ // value
//     console.log(index,val)
// })
// for(let val in arr){ // index
//     console.log(val)
// }
// for(let val of arr){ //value
//     console.log(val)
// }
// let arr1 = arr.map((val) =>{
//     return val
// })
// console.log(arr1)

// let a = arr.filter((val) =>{
//     return val%2!==0
// })
// console.log(a);

// const name = (a,b,...c) =>{
//     console.log(a,b,c)
// }
// name(1,2,10,11,1,2)

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let speed = Math.floor(Math.random() * 10) + 1;
//     if (speed > 5) {
//       resolve("success: data was saved");
//     } else {
//       reject("failure: data was not saved");
//     }
//   });
// }

// saveToDb("naman")
//   .then(() => {
//     console.log("data1 saved");
//     return saveToDb("naman2");
//   })
//   .then(() => {
//     console.log("data2 saved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// let h1 = document.querySelector(".h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

// changeColor("red", 1000)
//   .then(() => {
//     return changeColor("green", 1000);
//   })
//   .catch(() => {
//     console.log("color was not changed");
//   });

// let fn = async () => {

// };

// let res =
//   '{"fact":"A cat almost never meows at another cat, mostly just humans. Cats typically will spit, purr, and hiss at other cats.","length":116}';

// let format = JSON.parse(res);

// let facts = async () => {
//   try {
//     let api = await fetch("https://catfact.ninja/fact");
//     let res = await api.json();
//     console.log(res.fact);
//   } catch (error) {
//     console.log("error occured", error);
//   }
// };

// facts();

// let fact = async () => {
//   try {
//     let api = await axios.get("https://catfact.ninja/fact");
//     console.log(api);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// fact();

// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   let country = document.querySelector(".inpt").value;
//   let colleges = university(country);
//   console.log(colleges.name);
// });

// let url = "http://universities.hipolabs.com/search?name=";
// let country = "india";

// const university = async (country) => {
//   try {
//     let api = await fetch(url + country);
//     let data = await api.json();
//     console.log(data);
//   } catch (error) {
//     console.log("errror", error);
//   }
// };
