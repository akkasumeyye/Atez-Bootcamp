//string - number - boolean

let stringVal:string ="Some String Value";
let numberValue:number = 123123
let booleanValue:boolean = true;

// any type kullanmasanda olur
let someUnknownValue:any;

let userInput : number [] = [];
let stringUserInput : string[] = [];

// function userLogin(email:string, password:string) {
//    return email + password ;
// }

// Union TYpe
const userLogin = (email:string, password:string | number) => {
    typeof password === "string" ? password.toUpperCase() : email + password;
}

console.log(userLogin('asdd', "öööö"));

const Animal = {
    name : "Java",
    type: "Persian",
    age : 3
}

const createCatUser = (cat: {name:string, type:string, age:number}) : string => {
    return `Our cat name is ${cat.name} and she is ${cat.type} also ${cat.age} years old`;
}

console.log(createCatUser(Animal))

//interface

interface Animal {
    name : string;
    type : string;
    age : number;
    eyeColor? : string;
    wiskers?: boolean
}

// type Cat = {
    
// }

// enum

const Java : Animal= {
    name : "Java",
    type: "Persian",
    age : 3,
    // sound: 'meow' interfacede olmadığından hata verir
    // interfacede olanları yazmak zorundasın yoksa yine hata veriyor
}

// Next week's topics
//------------------------
// Generics & any
// Enums
// Deep dive functions
// Deep dive functions and extends keywoard
// Classes
// Architecture filing (Models, enums, classes   )
// Hot reload and watching
// Commands

// 