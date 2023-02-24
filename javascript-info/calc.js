const number1 = 5;
const number2 = 10;

// const addNumber = (a,b,c) => a+b+c;

// console.log(addNumber(number1, number2)); // NaN -> C BİLİNMİYOR

const addNumber = (a,b) => a+b;
console.log(number1 + number2)
console.log(number1 - number2)
console.log('tricky', number1/number2+number2) //10.5 islem sirasi var parantez kullan

console.log(number1/0)

console.log(0/10)

console.log(0 / "asd")

for(let i = 0; i <= 10; i++){
    console.log('cift sayi', i, i%2)
}

