const numbers = [2,4,6];//const variables are always read-only
numbers.push('Hello');
console.log(numbers);

/*Spread operators*/
//Example 1: Here we combine two arrays into one.
let arrayOne = [2, 3, 4];
let arrayTwo = [0, 1, ...arrayOne, 5];
console.log(`arrayTwo: ${arrayTwo}`);

/* Object destructuring */
let arr = ['a', 'b', 'c', 'd'];
let [a, b] = arr;
console.log(a, b);

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
