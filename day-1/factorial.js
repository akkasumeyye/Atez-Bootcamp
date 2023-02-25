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
const factorial2 = (num) => {
    if(typeof num === "number" && num > 0) {
        for(let i=1; i<=num; i++) {
         start2*=i;
        }
        return start2;
    }
    
    else if(num === 0) return 1;
    

   return "lutfen pozitif bir sayi degeri giriniz";
    
}

console.log(factorial2(4));
console.log(factorial2(-5));
factorial2('hello world');


