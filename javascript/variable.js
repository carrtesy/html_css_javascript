// 1. Use Strict
// ES5: for vanila JS
'use strict';

// 2. Variable(RW)
// let (added in ES6)
let name = "tommy";
console.log(name);
name = "hi";
console.log(name); 

// block scope
let globalName = "global name";
console.log("block");
{
    let name = "tommy";
    console.log(name);
    name = "hi";
    console.log(name);    
}
console.log(name);
console.log(globalName)

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)
// has no block scope
console.log(age);
age = 4;
var age;

// 3. Constants
// Immutable
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive
// object
// function

// numerics
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
const inf = 1 / 0;
const neginf = -1 / 0;
const nAn = 'nan'/2;
console.log(inf);
console.log(neginf);
console.log(nAn);
const bigint = 1231324791283374983127943790127483712892141237890n;
console.log(`value: ${bigint}, type: ${typeof bigint}`);

// string
const char = 'c';
const dm = 'dm';
const hidm = `hi ${dm}`;
console.log(`value: ${hidm}, type: ${typeof hidm}`);

// boolean
// false true

// null, undefined
let nth = null;
let x = undefined;

// symbol, create
// unique id
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);


const symbol3 = Symbol.for("id");
const symbol4 = Symbol.for("id");
console.log(symbol3 === symbol4);

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)


// 5. Dynamic Typing
let text =  "hello";
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`)
text = 1;
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`)
// console.log(text.charAt(0)); // TYPESCRIPT!