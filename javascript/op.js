'use strict';

// 1. string concat
console.log("my" + "cat");

// 2. numeric
console.log(1 + 2);

// 3. inc, dec
let counter = 2;
console.log(`counter ${counter}`);
const preInc = ++counter;
console.log(`counter ${counter}, preInc ${preInc}`);
const postInc = counter++;
console.log(`counter ${counter}, postInc ${postInc}`);

// 4. assingment
let x = 3;
let y = 6;
x += y;

// 5. comp
console.log(x < y);

// 6. logical
const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`)

function check() {
    for (let i = 0; i < 100; i++){
        console.log("!");
    }
    return true; 
}

// 7. Equality
// loose equality: with type conversion
const stringFive = "5";
const numberFive = 5;

console.log("loose");
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// strict equality: wo type conversion
console.log("strict");
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
console.log("object")
const dm1 = {name: "dm"};
const dm2 = {name: "dm"};
const dm3 = dm1;

console.log(dm1 == dm2)
console.log(dm1 === dm2)
console.log(dm1 === dm3)

// puzzler
console.log(0 == false); // T
console.log(0 === false) // F

// 8. conditional operators
const name = "coder"
if (name === "dm") {
    console.log("A");
} else if(name === "coder"){
    console.log("C")
} else {
    console.log("E")
}

// 9. ternary
console.log(name === "dm" ? 'yes' : "no");

// 10. switch
const browser = "IE";
switch (browser){
    case "IE":
        console.log("go away!");
        break;
    case "Chrome":
    case "FireFox":
        console.log("good!");
        break;
    default:
        console.log("bye!");
        break;
}

// 11. loops
let i = 3;
while (i > 0){
    console.log(`while ${i}`);
    i--;
}

for(let i = 3; i < 10; i++){
    console.log(i)
}