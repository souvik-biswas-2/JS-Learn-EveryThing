// console.log(a);

// var a = undefined;
// a = 10;


// symbols
const obj = {
    uid: 1,
    name: "William",

}

let uid = Symbol("uid");

obj[uid] = "001";

// bigint
let num = 9007199254740991n;

// type coercion

let result = '5' + 10; // + used for addition and concatenation 
// in js if one of the operand is string + works as concatenation

let result2 = '5' - 3; // - used for subtraction only 

// truthy and falsy values
// falsy values: 0, "",null, undefined, NaN, false, document.all
// everthing else is truthy
// use - !!0 to check truthy and falsy values   

// why NaN is number type
// NaN is a value of failed operation which is number type

// null vs undefined

let a;
console.log(a);
let b = null;
console.log(b);

// arithmetic, comparison, logical, assignment, unary, ternary operators

// + - * / % ** 
// = == === 
// < > >= <= ! != !== !!
// && || 
// ?:

// rest and spread (...)
// -> if ... uses in function parameter it is rest
// -> if ... uses in arrays and objects it is spread


// first class function
// -> function is treating as a value

// higher - order function
// -> function that accepts function in parameters or returns a function
function abcd(){
    return function() {
        console.log("Hello");
    }
}

abcd()();


// pure vs impure function
// -> pure
function Print(){
    console.log("Hello");
    
}

// -> impure
let c = 1;
function Hello(){
    c++;
}

// closure function
// -> function returns a function that returned function will be using variables of parent function 

function ParentFunction(){
    let a = 12;
    return function(){
        console.log(a);
        
    }
}


// IIFE - immediately invoked function expressions
(function(){

})();

// hoisting - we can use function or var before they declared 
// hoisting is possible in function statements only not possible in expression and arrow function



// Array
// push() pop()
// shift() ->> removes a value from begining of the array
// unshift() ->> adds a value from begining of the array
// splice(2,1) ->> removes 1 value from second index (splice modifies the origin array)
// slice(0,3) ->> return a copy of array portion (0,3) gives an array of [0th index to 2nd index(one place before)]

// array.sort(function(a,b){
//     return a - b; //ascending order b-a for descending
// })

// forEach
const array = [1, 2, 3, 4, 5];

array.forEach( (elem)=>{
    console.log(elem);
})

// map
const newarr = array.map( (value) => {
    if(value < 5) return false;
    else return true
} );

// filter
const newarr2 = array.filter( (value) => {
    if (value > 5) return true;
} );

// reduce 

const ans = array.reduce( (accumulator, value) => { 
    return accumulator + value;
},0) // 0 is the accumulator

// Object
// for in loop

const user = {
    name: 'Souvik',
    age: 22,
    email: 'souvik@dev.com'
}

for(let key in user){
    console.log(user[key]);
    
}

// make a array of object keys
// Object.keys(user) 

// copying of object 
// when object having nested keys then don't use spread opearator 

const user2 = JSON.parse(JSON.stringify(user));

// optional chaining

user?.email

// destructuring key as a variable

const obj1 = {
    'first-name': 'Souvik',
}

let {'first-name' : FirstName} = obj1;
