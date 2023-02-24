const x = true;
const y = null;
const z = {
    name: "umut",
    "surName": "yalcin",
    age:34
}

if (x) {
    console.log('x degeri buraya girdi', x);
}

if (y) {
    console.log('y degeri buraya girdi', y);
}

if(z) {
    console.log('y degeri buraya girdi', y);
}

let expectedNumber = 0;

if(expectedNumber> 0 && expectedNumber<9) {
    console.log('expected', expectedNumber);
    expectedNumber+=1;
} else {
    console.log('ben 10 sayisina ulastim', expectedNumber);
}