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
