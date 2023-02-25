// ES6 ES2022 ES2023 EcmaScript javascript

// spread operator

const calculateSum =(x , y , z) => {
    return x + y + z;
}

const numberArray = [2,5,8];
console.log(calculateSum(...numberArray));

const carObject = {
    id:1,
    model: "Seat",
    color: "gray",
}

carObject.age = 35;
// console.log(carObject);

const newModelSpec = {
    age:35,
    wheelCount : 4,
    maxSpeed: 200
}

carObject.specs = newModelSpec;
// console.log(carObject);

const newCar = {...carObject, ...newModelSpec}
// console.log(newCar)

const newNumberArray = [...numberArray, 1 , 3 ,5]

//...new Set() double elemanları tekler.
// console.log(...new Set(newNumberArray));

//Object destructing
//0. index ve 1. index'i al gerisini
const [x, y, ...rest] = numberArray;
// console.log('X', x);
// console.log('Y', y);
// console.log('number array rest', rest);

// sadece bu iki property istiyorum

const {model, maxSpeed, ...restCar} = newCar;
// console.log('NewModel', {model,maxSpeed});

// console.log('Model', model);
// console.log('MaxSpeed', maxSpeed);
// console.log('car rest model', restCar);

// console.log(newCarSize)

// Optional Chaining

const modelSpec = {
    age:35,
    wheelCount : 4,
    maxSpeed: 200,
    //speedInterval : ["1", "2"]
}

// console.log('Model', modelSpec?.speedInterval?.forEach(element => element));

//Ternary Operator

if(carObject.color == 'red') {
    
} else {
    
}

console.log('Ternary Operator', carObject.color === "red" || carObject.model === "Seat" ? "araba kirmizi" : "kirmizi degildir")

console.log('Null', modelSpec.speedInterval || "0")

// ?? , ?=