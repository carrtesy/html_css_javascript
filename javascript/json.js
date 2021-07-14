// JSON

"use strict";

// 1. Object to JSON

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
    name: "tori",
    color: "size",
    birthdata: new Date(),
    jump: () =>{
        console.log(`${name} can jump!`);
    }
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "name"? "dm":value;
});
console.log(json);

// 2. JSON to Object
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "birthdata" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); //not working

console.log(rabbit.birthdata.getDate());
console.log(obj.birthdata.getDate())