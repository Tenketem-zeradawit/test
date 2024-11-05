// 1.What is JavaScript, and why is it important in web development?
/*
ANSWER:

JavaScript is add an interactive content to websites.it is used to add dynamic content on web pages.










*/

// 2. Where should we include JavaScript in an HTML file, and why?


/*
ANSWER:
we include javaScipt in script tag <script></script> inside the listed tags
<head> </head> and <body> </body>










*/

//3.What is a variable in JavaScript, and what are the different types of variables?
/*
ANSWER:
variable is used to store,declare or initiate a data in javascript.It has different types const,let,var  .const is use to declare a number which is fixed not changes. let is used for variable numbers which can be updates anytime we want.












*/
// 4. Using JavaScript, write an expression that calculates the area of a rectangle with length 10 and width 5.
/*
ANSWER:
let a = 5;
let b =6;
let result=(a*b);
console.log( "the area of triangle is" + result)
or

function areaRectngle(a,b){
return a*b;
}
console.log(areaRectangle(10,5))









*/
/*
5. Identify basic JavaScript data types: 
let str = "Hello";  -->    string
let num = 42;       -->     number
let isAvailable=false     -->boleen
let bool= null;     --> null
let def;            --> undefined



*/
// 6. Define a function greet that takes a name parameter and returns a greeting message like 'Hello, [name]!'.

/*
ANSWER:
function greetHi(name){
 let name ="tenketem";

}

console.log("hello," + name )
or 



*/

/*
7. Change these functions to arrow functions

Function sayHello(){

console.log(“hello “)
console.log(“hello world”)
}

Function sayHI(){
console.log(“hi”)
}


 
*/
// ANSWER: 
 /*console sayHello = () => {
    console.log("hello");
    console.log("hello world");
};

const sayHI = () => {
    console.log("hi");
};
  */






// 8. Create an object named person with properties name set to 'John', age set to 30, and isStudent set to false. How can you access the name property of the person object?

// ANSWER:
/*
const obj={fname:"john",age:"30", isStudent:"false"}
for(let property in obj){
    console.log(obj[property]);// out put john   30  false
    console.log(property); //fname age isStudent
    console.log(property + ': '+ obj[property]); //fname: john  age:30  isStudent:false
}
/*
ANSWER:












*/

// 9. Write a JavaScript conditional statement that checks if a variable score is greater than or equal to 50. If true, log 'Pass' to the console; otherwise, log 'Fail'.

//  ANSWER
/*
if(a>=50){
console.log("pass")
}
else{
console.log("fail")
}





// 10. Write a for loop that logs the numbers from 1 to 5 to the console.

//  ANSWER
for (let i = 0; i <= 5; i++) {
    console.log(i);
    
}

// 11. Using a for loop, log the numbers from 1 to 10 to the console. Use the break statement to stop the loop when the number reaches 5.

//  ANSWER
for (let i= 0; i <= 10; i++) {
   if(i=5) {
   break;
   }
    console.log(i);
}


//12. Using a for loop, log the numbers from 1 to 5 to the console. Use the continue statement to skip logging the number 3.

// ANSWER
for (let i= 1; i <= 5; i++){
   if(i=3) {
    continue;
}
    console.log(i);
}


//13. Write a try...catch block that attempts to access a property of an undefined variable. If an error occurs, log 'Cannot access property of undefined' to the console.
// ANSWER
/*

let undefined;

try {
    console.log(undefine.result);
} catch (error) {
    console.log('Cannot access property of undefined');
}

*/

// 14.What are default parameters in JavaScript functions? Write a function multiply that takes two parameters, a and b, where b has a default value of 1.
// ANSWER
/** default parameter is used to add default values for function parameters when no value or undefined value is passed.
 * let b=1;
function sum (a,b){
 return a+b;
}
conole.log(sum(2,1))
 */

// 15. What is the spread operator in JavaScript, and how is it used? Provide an example that combines two arrays.
// ANSWER
/*
spread operaters are operater that use for different purposes like splite,slice,concat
let first=" java";
let second =" script";
first.concat(second);
*/


// 16. What are template literals in JavaScript, and how do they differ from regular strings? Give an example of using a template literal to include a variable.

// ANSWER
/*
template literal (${}) is used to call the data of the variables.we put the Name of the declared variables in {} and $ helps as to print the value of the declared variable.
they are different because they use back up string which is(``) and all the variable written out side of ${} are considerd as a string.
let a = 1;
let b =2;
const c =(` a is ${a} and b is ${b}`)
console.log(c); ais 1 and b is 2.
*/
// 17. What is the ternary operator in JavaScript, and how does it work? Provide an example of using the ternary operator to check if a number is even or odd.
// ANSWER
/*
ternary operater is the way of writting if else in short way ? as if : as else.
let a=12;
let result = (a%2===0) ? "true " : "false";
console.log(result);
  

// 18. What is destructuring in JavaScript? Provide a simple example of destructuring an array and object.

// ANSWER
const info = [fname:"Tenketem",lname:"zeradawit"]
const{ firstname,lastname} =info;
console.log( "first name is :" + firstname);
console.log( "first name is :" + lastname);

// 19. Using a for...in loop, iterate over the properties of the object car = { make: 'Toyota', model: 'Camry', year: 2020 } and log each property name and its value to the console.

// ANSWER
 let car = { make: 'Toyota', model: 'Camry', year: 2020 }
for(let carname in car){
    console.log(carname + "-" +car[carname] )
}

// 20. Use the forEach method to log each element of the array fruits = ['apple', 'banana', 'orange'] to the console.

// ANSWER
let fruits = ['apple', 'banana', 'orange']
fruits.forEach(element => {
console.log(fruits)
    
});