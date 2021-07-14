"use strict";

// 1. declare
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const dm = new Person("dm", "20");
console.log(dm.name);
console.log(dm.age);
dm.speak();

// 2. getter, setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        if (value < 0){
            console.log("age cannot be negative");
            //throw Error("age cannot be negative");
        }
        this._age = value;
    }
}

const user1 = new User("steve", "job", -1);
console.log(user1.age);

// 3. Fields
class Exp{
    publicField = 2;
    #privateField = 0;
}
const exp = new Exp();
console.log(exp.publicField);
console.log(exp.privateField);

// 4. static
class Article {
    static publisher = "dm";
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. inheritance
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color}`)
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    // override
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rect = new Rectangle(20, 20, "blue");
rect.draw();
console.log(rect.getArea());

// 6. Class checking: instanceof
console.log(rect instanceof Rectangle);
console.log(rect instanceof Object);


// 7. object
const name = "dm";
const age = 4;
const obj1 = {};
const obj2 = new Object();
const ellie = {name: "ellie", age: 4};
ellie.hasJob = true;
delete ellie.hasJob;

// 8. computed property
console.log(ellie.name);
console.log(ellie["name"]);

// 9. property value shorthand
const p1 = {name: "dm1", age: 1};
const p2 = makePerson("dm2", 2);
function makePerson(name, age){
    return {name, age};
}
console.log(p2);

// 10. in operator
console.log("name" in ellie);

// 11. for..in, for..of
console.clear()
console.log("for in, for of");
console.log(ellie)
for (let key in ellie){
    console.log(key);
}

const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}
for(let value of array){
    console.log(value);
}

// 12. cloning
const user = {name:"ellie", age:20};
const user2 = user; 

user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = Object.assign({}, user);