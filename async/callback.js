"use strict";

// 1. JS is Synchronous
// code in order after hoisting
// hoisting: var, function declaration

console.log("1");
setTimeout(function(){
    console.log("2");
}, 1000);
setTimeout(() => console.log("4"), 1000);
console.log("3");

// sync callback
function printImmediately(print){
    print();
} // func: hoisted

printImmediately(() => console.log("Hello"));

// async
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

// 2. callback hell
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if (
                (id === "dm" && password === "dm1") ||
                (id === "coder" && password === "pw1")
            ) {
                onSuccess(id);
            } else {
                onError(new Error("not found"));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === "dm") {
                onSuccess({name:"dm", role:"admin"});
            } else {
                onError(new Error("no access"));
            }
        }, 1000)
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

// hard to read
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`hello ${userWithRole.name}, you are ${userWithRole.role}.`);
            },
            error => {
                console.log(error);
            } 
        );
    },
    error => {
        console.log(error);
    }
)