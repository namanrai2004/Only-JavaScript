// const add = (num1,num2) =>{
//     console.log(num1+num2);
    
// }
// let result = add(1,2)
// console.log(result);

// console.log(add);

// const loginMsg = (num1,num2) =>{
//     return `${num1+num2} just logged in`
// }
// console.log(loginMsg(2,3));

// const cart = (...price) =>{

//     return price
// }
// console.log(cart(4,2,4,5));

// const obj = {
//     name: "naman",
//     sirname: "rai"
// }

// const list = ({name,sirname}) =>{
//     return `name is ${name}and sirname is ${sirname}`
// }
// console.log(list(obj));

// const arr = [1,2,3,4,5]

// const getarr = (val) =>{
//     return `first value is ${val[0]}`
// }
// console.log(getarr(arr));


//Higer order loops
const arr = ["naman","rai","love"]

// const newarr = arr.forEach(val =>{
//     console.log(val);
//     return val
// })
// console.log(newarr);

const values = [1,2,3,4,5,6]

// const newVal = values.filter((val) =>{
//     return val > 4
// }
// )
// console.log(newVal);

// const newVal = values.filter((val) => val > 4)
// console.log(newVal);

const newarr = values
.map(val  => val*10)
.map(val => val+1)
console.log(newarr);

//Async in js

const github = async () => {
    try {
        const response = await fetch('https://api.github.com/users/namanrai2004')
    const user = await response.json()
    console.log(user);
    } catch (error) {
          console.log("Error", error);    
    }
}
github()







