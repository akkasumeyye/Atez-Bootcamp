//string - number - boolean
var stringVal = "Some String Value";
var numberValue = 123123;
var booleanValue = true;
// any type kullanmasanda olur
var someUnknownValue;
var userInput = [];
var stringUserInput = [];
// function userLogin(email:string, password:string) {
//    return email + password ;
// }
// Union TYpe
var userLogin = function (email, password) {
    typeof password === "string" ? password.toUpperCase() : email + password;
};
console.log(userLogin('asdd', "öööö"));
var Animal = {
    name: "Java",
    type: "Persian",
    age: 3
};
var createCatUser = function (cat) {
    return "Our cat name is ".concat(cat.name, " and she is ").concat(cat.type, " also ").concat(cat.age, " years old");
};
console.log(createCatUser(Animal));
// type Cat = {
// }
// enum
var Java = {
    name: "Java",
    type: "Persian",
    age: 3
};
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
