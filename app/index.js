//Using data from other files without doing modules.export like in node
import {hero, total} from './hero.js';
import {multiply} from './calculate.js';
import add from './calculate.js'; //import default

const numbers = [2,4,6];//const variables are always read-only
numbers.push('Hello');
console.log(`numbers: ${numbers}`);

/*Spread operators*/
//Example 1: Here we combine two arrays into one.
let arrayOne = [2, 3, 4];
let arrayTwo = [0, 1, ...arrayOne, 5];
console.log(`arrayTwo: ${arrayTwo}`);

/* Object destructuring */
//with array
let arr = ['a', 'b', 'c', 'd'];
let [a, b] = arr;
console.log(a, b);

//with Object
let pharaoh = {name: 'Cleopatra', children: 4};
let {name, children} = pharaoh;
console.log(name, children);

//Example 2: using spread operator in a function.
function spread(...x){
  console.log(`spread: ${x}`);
}
spread(1,2,3);

//Block scoping with ES6
//Curly braces declare a new scope of data.
//This only works when using let and const for variable assignments.

function scream(){
  let people = 10;
  console.log(`People: ${people}`);//template strings
}

function screamIt(){
  let people = 20;
  console.log(`People: ${people}`);//template strings
}

scream();
screamIt();

/*Map method */
let nums = [3, 6, 9];//simple array.

//double each item in nums array.
let nums_doubled = nums.map((n) => n * 2);
console.log(`nums_doubled: ${nums_doubled}`);

/*Filter method*/
//get values > 5 in nums array.
let nums_greater = nums.filter((n) => n > 5);
console.log(`nums_greater: ${nums_greater}`);

/* String helper methods */
//repeat
//let string = 'Yo' + 'o'.repeat(5);
let string = `Yo${"o".repeat(5)}`;
console.log(`string: ${string}`);

//startsWith
let c = "hello";
console.log(`startsWith: ${c.startsWith("he")}`);

//endsWith
console.log(`endsWith: ${c.endsWith("lo")}`);

//includes
console.log(`includes: ${c.includes("el")}`);

/* Checking numbers */
const addToCart = (item, num) => {
  //return Number.isFinite(num);//check if num parameter passed is finite number
  return Number.isSafeInteger(num);//check if num parameter passed is integer that JS can handle.
};

console.log('addToCart', addToCart('pants', Infinity));
//console.log('addToCart', addToCart('pants', Math.pow(2, 56)));

console.log(hero, total);//imported from hero.js
console.log(`multiply: ${multiply(2,3)}`);//imported from calculate.js
console.log(`add: ${add(2,3)}`);//imported from calculate.js
