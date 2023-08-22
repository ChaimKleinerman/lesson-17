//q1
function sumEven(array: number[]): number {
    let count: number = 0;
    for (let num of array) {
        if (num % 2 === 0) count += num;
    }
    return count;
}
//q2
type rec = { width: number; hight: number };
const rectangle: rec = {
    width: 5,
    hight: 6,
};
const rectangleArea = (arg: rec): number => {
    return arg.width * arg.hight;
};
//q3
const isPalindrome = (arg: string): boolean => {
    for (let index: number = 0; index < arg.length; index++) {
        if (arg[index] != arg[arg.length - index]) return false;
        if (index === arg.length - index)return true;
    }
    return true
};
//q4
function theFirstIsUpperTheRestAreLower(array:string[]):string[]{
    const newArray: string[] = []
    for(let str of array){
        let rest: string = str.slice(1)
        if (str[0] === str[0].toUpperCase() && rest.toLocaleLowerCase() === rest)
        newArray.push(str)
    }
    return newArray
}
//q5
function uniqueNum(array:number[]):number[]{
    const newArray: number[] = []
     for(let num of array){
        if(!array.includes(num)) newArray.push(num)
     }
    return newArray
}
//q6
type myPerson = {
    firstName:string
    lastName: string
}

type myAcronym = {
    firstInitial:string
    lastInitial:string
}

const acronym = (arg:myPerson):myAcronym =>{
   const myAcr: myAcronym = {
        firstInitial:arg.firstName,
        lastInitial: arg.lastName 
    } 
    return myAcr
}
//q7
type nameAge = {
    name:string
    age: number
}
function averageAge(array:nameAge[]):number{
    let counter: number = 0
    for(let object of array){
       counter += object.age
    }
    return counter
}
//q8
type minMax ={
    min:number
    max:number
}

const minMaxNum = (array:number[]):minMax =>{
    let minNum: number = array[0]
    let maxNum: number = array[0]
    for (let index = 0; index < array.length; index++) {
        if(array[index] < minNum) minNum = array[index]
        if (array[index]> maxNum) maxNum = array[index]
    }
   const myObject:minMax = {
        min:minNum,
        max:maxNum
   }
   return myObject
}
//q9
function reverse(array:unknown[]):unknown[]{
    return array.reverse()
}