// console.log("hello");

// Add Two Numbers

// let a = 5
// let b  = 6

// const c = a+b
// console.log(`The sum of ${a} and ${b} is: `, c);

// User input

// let a = parseInt(prompt("enter the first number"))
// let b =parseInt(prompt("enter the second number"))
// const add = a+b
// console.log(`The sum of ${a} and ${b} is: `, add);

// square root

// let num1 = 9
// console.log(`The square of ${num1} is :`,Math.sqrt(num1));

// Area of trinagle

// let base = 30
// let height = 50

// let areaOfTriangle = (base*height)/2
// console.log(areaOfTriangle);

//Swaping two number

// let a  = 2
// let b = 3

// let swap = {a,b} = {b,a}
// console.log(swap);

//Km to Miles
// const input = document.querySelector('.inpt')
// const button = document.querySelector('.btn')
// const results = document.querySelector('.output')

// const kmToMiles  = () =>{
//     const miles = 0.621371
//     const input = document.querySelector('.inpt').value
//     console.log(input);
    
//     const result = miles * input
//     results.innerHTML = result

// }
// button.addEventListener('click',kmToMiles)

// Positive ,Negative Or Zero
// const input = document.querySelector('.inpt')
// const button = document.querySelector('.btn')
// const results = document.querySelector('.output')

// const convertResult =() =>{
//     const inpt = document.querySelector('.inpt').value
//     const converted = Math.sign(inpt)
//     // results.innerHTML = converted
//     if (converted === 1) {
//         results.innerHTML = `Number is positive`
//     } else if(converted === 0) {
//         results.innerHTML = `Number is Zero`
//     } else{
//         results.innerHTML = `Number is Negative`
//     }
    
// }
// button.addEventListener('click',convertResult)

// Otp generator
// const input = document.querySelector('.inpt')
// const button = document.querySelector('.btn')

// const otpGenerator = () =>{
//     const otp = Math.floor( Math.random()*10000)
//     const result = input.value = otp 
// }
// button.addEventListener('click',otpGenerator)


//odd and even

// let val = 2
// if (val % 2 == 0) {
//     console.log(`${val} is and even`);
    
// } else {
//     console.log(`${val} is an odd`);
    
// }

// val = val%2==0? console.log("num is even"): console.log("num is odd")

// const num = 1
// if (num === 1) {
//     console.log(`${num} is neither prime nor composite`);
// } else if(num < 1) {
//     console.log(`${num} is not prime`);
// } else{
//     for (let i = 0; i < num ; i++) {
//         if (num%2 ==0) {
//             console.log(`${num} is not prime number`);  
//             break;
//         } else {
//             console.log(`${num} is prime number`);
//         }
        
//     }
// }

// Find the largest num
// const num = Math.max(1,2,3,4,)
// console.log(num);

//Find the factorial
const num = 5
let fact = 1
for (let i = 1; i <= num; i++) {
    fact = fact*i
}
console.log(fact);  









