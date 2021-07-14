"use strict";

// Promise
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) =>{
    // doing some heavy work (network, files)
    console.log("doing something...");
    setTimeout(() => {
        //resolve("dm"); // on success
        reject(new Error("No Network")); // on error
    }, 2000);
});

// 2. Consumer: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch( error => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    })

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    })
})
.then(num => console.log(num));

// 4. error handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("chicken"), 1000);
    })
const getEgg = (hen) => 
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => egg`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    })

const cook = (egg) => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fried egg!`), 1000);
    })

getHen() // 
    .then(getEgg)//.then(hen => getEgg(hen))
    .catch(error => {
        return "bread";
    })
    .then(cook)//.then(egg => cook(egg))
    .then(console.log)//.then(meal => console.log(meal));
    .catch(console.log)