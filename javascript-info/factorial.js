let start = 1;
const factorial = (num) => {
   for(let i=1; i<=num; i++) {
    start*=i;
   }
   return start;
}

// console.log(factorial(3));
console.log(factorial('helloworld')); // start değeri 1'i donderdi :) 

let start2 = 1;
const factorial2 = (a) => {
    if(typeof a === "number") {
        for(let i=1; i<=a; i++) {
         start2*=i;
        }
        return start2;
    }
    else {
        console.log("lutfen bir sayi degeri giriniz")
    }
}

console.log(factorial2(4));
factorial2('hello world');


