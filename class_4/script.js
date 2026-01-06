// Determine the minimum number of moves needed to make all elements in an array equal.
// In each move, you choose all but one element and increment their values by 1.
// each move = toal element sum of array - (min value of array * length of array)
// function minmoves(arr){
//     let minvalue = arr[0];
//     let sum = 0;

//     //find minimum vlaue of array
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < minvalue){
//             minvalue = arr[i];
//         }
//         sum = sum + arr[i];
//     }

//     //sum of array
//     // for(let i=0; i< arr.length; i++){
//     // }
//     let minmove =  sum - (minvalue * arr.length);
//     return minmove;
// }

// let arr = [4,5,2,4,5,2];
// console.log("it's minimum moves of array this question", minmoves(arr));

//how to run js and get some error
// getvalue();
// console.log(x)
// console.log(getvalue)
// console.log(setvalue)

// var x = 2;
// function getvalue() {
//     console.log("this is value of....")
// }

// var setvalue = () => {
//     console.log("this is 2 value of...")
// }

//Function :- A function is a reusable block of code that perform a specific task.
// Types of function
// 1. Function Declaration :- this is hoisting supported and most usally
// function demo(){
//     console.log("this is demo function")
// }
// demo();
// 2. Function Expression :- this is not allow hoisting
// const demo = function (){
//     console.log("hello");
// }
// demo()
// 3. Arrow Function & IIFE(Immediately invoked function expression)
// (() =>{
//     console.log("hello")
// })() // IIFE
// const count = (a,b) =>{ return a+b; }
// let ans = count(3,4);
// console.log(ans) // arrow function

// 4. Anonymous function
// setTimeout(function () {
//     console.log("hello");
// },5000);

// 5. Named function expression
// const fact =  function factorial(n){
//     return n === 1 ? 1 : n * factorial(n-1);
// }
// console.log(fact(5))

// 6 . Callback function
// function great(name, callback){
//     callback(name);
// }
// great("yash" , function (n){
//     console.log("hello" , n);
// })

// 7. Higer Order function
// function multiply(num){
//     return function (value){
//         return value * num;
//     }
// }
// const ans = multiply(4);
// console.log(ans(5))

// 8. Constuctor function
// function person(name, age){
//     this.name = name;
//     this.age = age;
// }
// const p1 = new person("yash", 67);
// console.log(p1.name)
// console.log(p1.age)

// 9. Generator Function
// function* gen(){
//     yield 5;
//     yield 2;
// }
// const p = gen();
// console.log(p.next().value)

// 10. Asyc function
async fucntion fetData(){
    const res = await fetch(url);
    
}