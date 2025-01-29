// let outer = () =>{
//    return function(num1,num2){
//          return num1+num2   
//     }
    
// }
// console.log(outer(2,3));
// let sum = outer()
// console.log(sum(2,3));

// const firstName = (name,callback) =>{
//     console.log(`my name is ${name}`) 
//     callback(name)
// }


// const sirName = (sirname) =>{
//     console.log(`sirname is ${sirname}`)
// }


// firstName("naman",sirName)

const maths = (num1,num2, experesion) =>{
    return experesion(num1,num2)
}
const add = (num1,num2) =>{
    return num1+num2
}
const sub = (num1,num2) =>{
    return num1-num2
}
console.log(maths(2,3,add))
console.log(maths(2,3,sub))


