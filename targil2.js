"use strict";
//q1
function sumEven(array) {
    let count = 0;
    for (let num of array) {
        if (num % 2 === 0)
            count += num;
    }
    return count;
}
const rectangle = {
    width: 5,
    hight: 6,
};
const rectangleArea = (arg) => {
    return arg.width * arg.hight;
};
//q3
const isPalindrome = (arg) => {
    for (let index = 0; index < arg.length; index++) {
        if (arg[index] != arg[arg.length - index])
            return false;
        if (index === arg.length - index)
            return true;
    }
    return true;
};
//q4
function theFirstIsUpperTheRestAreLower(array) {
    const newArray = [];
    for (let str of array) {
        let rest = str.slice(1);
        if (str[0] === str[0].toUpperCase() && rest.toLocaleLowerCase() === rest)
            newArray.push(str);
    }
    return newArray;
}
//q5
function uniqueNum(array) {
    const newArray = [];
    for (let num of array) {
        if (!array.includes(num))
            newArray.push(num);
    }
    return newArray;
}
const acronym = (arg) => {
    const myAcr = {
        firstInitial: arg.firstName,
        lastInitial: arg.lastName
    };
    return myAcr;
};
function averageAge(array) {
    let counter = 0;
    for (let object of array) {
        counter += object.age;
    }
    return counter;
}
const minMaxNum = (array) => {
    let minNum = array[0];
    let maxNum = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < minNum)
            minNum = array[index];
        if (array[index] > maxNum)
            maxNum = array[index];
    }
    const myObject = {
        min: minNum,
        max: maxNum
    };
    return myObject;
};
//q9
function reverse(array) {
    return array.reverse();
}
