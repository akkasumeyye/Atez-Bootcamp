//string data type
var sth = "ATEZ BOOTCAMP"

//number data
var number = 123

//boolean data
var isTrue = true

//or
var isFalse = false

//undefined data
var sthelse;
// console.log("UNDEFİNED",sthelse)

//string data
// console.log("STRİNG DATA",sth)

//NULL data
var nullData = null;

// object data
var testObj = {
    sth  : "test",
    number : 123,
    isTrue  : false,
}

// array data
var testArray = [
    123,213, "test",null, false, testObj = {
        sth  : "test",
    number : 123,
    isTrue  : false,
    }
]

// var datası heryerden ulasıp degiştirilebilir, her durumda degiştirilebilir olması dogru degildir
// kopyasının alınıp deişirilmesi ana datanın kalması dogru olandır. let ve const geldi sonra
// block scope -- let & const {data sadece burada erişilir}

const globalScope = "GLOBAL SCOPE VARIABLE"
function functionScope (){
    // const fnScopeVariable = "FUNCTION SCOPE VARIABLE";
    let fnScopeVariable = "FUNCTION SCOPE VARIABLE";


    // fnScopeVariable = "NEW VALUE" CONST İLE DEGİSMEZ

    // fnScopeVariable = "NEW VALUE"

    // console.log("GLOBAL ===>", globalScope);
    // console.log("FUNCTION===>", fnScopeVariable)

    if(globalScope) {
        let ifScopeValue = "IF SCOPE VALUE";
        var globalBlockScope = "global";
    }

    //console.log("FUNCTION ===>", ifScopeValue); // calısmaz if scope icinden erisilie anca

}

fnScopeVariable = "ANOTHER VALUE";

// console.log("GLOBAL ===>", globalScope);

// console.log("FUNCTION===>", fnScopeVariable)

// console.log("FUNCTION ===>", globalBlockScope); ulasamazsin

// functionScope();

const returnSomething = (a,b) =>
    //const c = 5; // disardan erisilmez
    //const d = 6; // disardan erisimez
    a+b;


// console.log(returnSomething(3,2));

// function functionScope() {
//     const testArray = [
//         "atez bootcamp",
//         "some value",
//         23,
//         "aab",
//     ];

//     for(let i = 0; testArray.length; i++) {
//         if(typeof testArray[i] === "number") {
//             console.log(testArray[i]);
//         }
//     }
// }

// functionScope();

// function functionScope() {
//     const testArray = [
//         {name:"umut", surName:"yalcin", age:34},
//         {name:"umut", surName:"yalcin", age:35},
//         {name:"umut", surName:"yalcin", age:36},
//         {name:"umut", surName:"yalcin", age:37},
//         {name:"umut", surName:"yalcin", age:38},
//         {name:"umut", surName:"yalcin", age:39},
//     ];

//     for(const testArrayKey in testArray) {
//         console.log('person object', testArray[testArrayKey]);
//     }

//     let expectedAge = 30;
//     while(expectedAge < 37) {
//         expectedAge = expectedAge + 1 ;
//         console.log('deger artacak' , expectedAge)
//     }
// }

// functionScope();

// const carArray = [];
const carModelsArray = ["Porsche", "Tofas", "Ferrari", "Volvo"];

//forEach
// carModels.forEach((x,index)=> {
//     const carObject = {
//         id : index,
//         model : x
//     }

//     carArray.push(carObject);
// })

// console.log('carArray', carArray);

//map
const carModels = carModelsArray.map((value,index)=> {
   return {
    id: index,
    model : value
   }
})

// console.log('carModels', carModels)

const hasInSaleCars = [
    { id: 0, model: 'Porsche' , inSale:true},
    { id: 1, model: 'Tofas' , inSale: false},
    { id: 2, model: 'Ferrari' , inSale: false},
    { id: 3, model: 'Volvo', inSale:true }
]

const inSaleCras = hasInSaleCars.filter( x => x.inSale)
// console.log('inSaleCras', inSaleCras)

// find ilk buldugu sonucu bulur ve onu basar

const foundCars = hasInSaleCars.find(x => x.id>1 && x.inSale)
console.log('foundCars', foundCars)
