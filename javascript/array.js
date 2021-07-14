"use strict";

// 1. Array declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index Position
const fruits = ["사과", "바나나"]
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

// 3. Looping Over
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// for of
for(let fruit of fruits) {
    console.log(fruit);
}

// for each
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
})

fruits.forEach((fruit, index) => console.log(fruit));

// 4. Addition, Deletion, Copy
// push: add
fruits.push("딸기", "복숭아");
console.log(fruits)

// pop: remove
fruits.pop();
console.log(fruits);

// unshift
fruits.unshift("딸기", "레몬");
console.log(fruits);
// shift
fruits.shift();
console.log(fruits)

// splice
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "사과", "수박");
console.log(fruits)
let fruits2 = ["레몬", "망고"];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);

// 5. Searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf("수박"));
console.log(fruits.includes("수박"));
fruits.push("사과");
console.log(fruits.indexOf("사과"));
console.log(fruits.lastIndexOf("사과"));



// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(",");
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); 
}
// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(2, 5);
    console.log(result);
    console.log(array);
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find(function(student, index){
        return student.score === 90;
    })
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result);
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, cur) => prev + cur.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map(student => student.score)
        .filter(score => score >= 50)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
    .sort((a, b) => b - a)
    .join();
    console.log(result);
}