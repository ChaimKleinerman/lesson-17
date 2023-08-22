//q1
function returnTheBigger(a: number, b: number): number {
    return a > b ? a : b;
}
//q2
function printTheBigger(a: number, b: number): void {
    const x: number = a > b ? a : b;
    console.log(x);
}
printTheBigger(5, 3);
//q3
function evenOrOdd(num: number): string {
    const even: string = "even number";
    const odd: string = "odd number";
    return num % 2 === 0 ? even : odd;
}
//q4
function strLength(str: string): number {
    return str.length;
}
//q5
function nArray(num: number): number[] {
    const myArray: number[] = [];
    for (let count: number = num; count > 0; count--) {
        myArray.unshift(count);
    }
    return myArray;
}
//q6
function theBiggestNumber(array: number[]): number {
    let temp: number = array[0];
    for (let i: number = 0; i > array.length; i++) {
        temp < array[i] ? (temp = array[i]) : (temp = temp);
    }
    return temp;
}
//q7
type Person = {
    name: string;
    age: number;
    idStudent: boolean;
};
//q8
function printPerson(arg: Person): void {
    arg = {
        name: "chaim",
        age: 26,
        idStudent: true,
    };
    console.log(arg);
}
//q9
const myPerson: Person = {
    name: "chaim",
    age: 26,
    idStudent: true,
};
function isYoungerThen18(arg: Person): boolean {
    return arg.age < 18 ? true : false;
}
isYoungerThen18(myPerson);
//q10
interface Book {
    Title: string;
    Author: string;
    Year: number;
}

//q11
type Reader = Person&{favoriteBook:Book}
//q12
function theOlderReader(arg:Reader[]):string{
    let  olderNum: number = arg[0].age
    let olderName: string = arg[0].name
    for (let reader of arg){
        if ( olderNum <  reader.age){
             olderNum = reader.age
             olderName = reader.name
        }
    }
    return `this is the older reader${olderName}`
}
//q13
function theOlderBook(arg:Reader[]):string{
    let  olderNum: number = arg[0].favoriteBook.Year
    let olderName: string = arg[0].favoriteBook.Title
    for (let reader of arg){
        if ( olderNum <  reader.favoriteBook.Year){
             olderNum = reader.favoriteBook.Year
             olderName = reader.favoriteBook.Title
        }
    }
    return `this is the older reader${olderName}`
}

