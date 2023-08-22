"use strict";
//q1
function returnTheBigger(a, b) {
    return a > b ? a : b;
}
//q2
function printTheBigger(a, b) {
    const x = a > b ? a : b;
    console.log(x);
}
printTheBigger(5, 3);
//q3
function evenOrOdd(num) {
    const even = "even number";
    const odd = "odd number";
    return num % 2 === 0 ? even : odd;
}
//q4
function strLength(str) {
    return str.length;
}
//q5
function nArray(num) {
    const myArray = [];
    for (let count = num; count > 0; count--) {
        myArray.unshift(count);
    }
    return myArray;
}
//q6
function theBiggestNumber(array) {
    let temp = array[0];
    for (let i = 0; i > array.length; i++) {
        temp < array[i] ? (temp = array[i]) : (temp = temp);
    }
    return temp;
}
//q8
function printPerson(arg) {
    arg = {
        name: "chaim",
        age: 26,
        idStudent: true,
    };
    console.log(arg);
}
//q9
const myPerson = {
    name: "chaim",
    age: 26,
    idStudent: true,
};
function isYoungerThen18(arg) {
    return arg.age < 18 ? true : false;
}
isYoungerThen18(myPerson);
//q12
function theOlderReader(arg) {
    let olderNum = arg[0].age;
    let olderName = arg[0].name;
    for (let reader of arg) {
        if (olderNum < reader.age) {
            olderNum = reader.age;
            olderName = reader.name;
        }
    }
    return `this is the older reader${olderName}`;
}
//q13
function theOlderBook(arg) {
    let olderNum = arg[0].favoriteBook.Year;
    let olderName = arg[0].favoriteBook.Title;
    for (let reader of arg) {
        if (olderNum < reader.favoriteBook.Year) {
            olderNum = reader.favoriteBook.Year;
            olderName = reader.favoriteBook.Title;
        }
    }
    return `this is the older reader${olderName}`;
}
