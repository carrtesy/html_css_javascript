"use strict";

// 1. function declaration
function printHello() {
    console.log("hello");
}
printHello();

function printMsg(message) {
    console.log(message);
}
printMsg("hello");
printMsg(1234);

// 2. parameters
function changeName(obj){
    obj.name = "coder";
}

const dm = {name: "dm"};
changeName(dm);
console.log(dm)

// 3. default parameters
function showMsg(message, from = "unknown"){
    console.log(`${message} by ${from}`);
}
showMsg("hi!");

// 4. Rest Parameters
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg)
    }

    args.forEach((arg) => console.log(arg))
}
printAll("dream", "coding", "dm")

// 5. local scope
let globalMsg = "global";
function printMsg(){
    let message = "hello";
    console.log(message);
    //console.log(globalMsg);
    function printAnother(){
        console.log(message);
        let childMsg = "child";
    }
    // console.log(childMsg) // no!
}

// 6. return
function sum(a, b){
    return a+ b;
}

// 7. early return
// bad
function upUser(user){
    if (user.point > 10){
        // long upgrade logic..
    }
}

// good
function upUser(user){
    if (user.point <= 10){
        return;
    }

    // long upgrade logic
}

// 8. function expressions

// print(); // no!
const print = function() { 
    // anonymous!
    console.log("Print!");
}
print();

const print2 = function print() {
    // named!
    console.log("Print!");
}
print();

hoist(); // can be executed
function hoist(){
    console.log("hoist!");
}


// 9. callback hell
function randomQuiz(answer, printYes, printNo){
    if (answer === "love you"){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function(){
    console.log("yes!");
};

const printNo = function(){
    console.log("no!");
}

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// 10. arrow function
const simplePrint = function() {
    console.log("simpleprint");
}
const simplePrint2 = () => console.log("simpleprint!");

const add = (a, b) => a + b;
const complexadd = (a, b) => {
    return a + b;
}

// 11. IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log("life");
})();