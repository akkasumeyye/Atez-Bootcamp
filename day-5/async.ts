// const userName ='SUMEYYE AKKAS'

// function getUserName() {

//     return `this is userName=${userName}`;
// }

// const MAX_PRICE = 1000000;

// function isPrime(n) {
//     for (let index = 2; index < Math.sqrt(n); index++) {
//         if(n % i === 0) {
//             return false;
//         }
        
//     }
//     return n>1;
// }

// // CALLBACK HELL (arastirma konusu)

// // event handling and client side example

// document.querySelector('.button')?.addEventListener('click', function() {
//     // do sth with it
// })

// const xhr = new XMLHttpRequest();
// xhr.open('GET', url:'herhangibirurl.com/users');

// PROMISE DEEP DIVE odev konusu
// PROMISE metotları ödev konusu Promise.All() gibi.

import fetch from 'cross-fetch';

const fetchOurUsers = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchOurUsers);

fetchOurUsers
  .then((res) => res.json())
  .then((data) => console.table(data))
  .catch((err) => console.log(err));

// async await

async getUserName function() {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    return {
        // return Object 
    }
}

// async await deep dive arastirma konusu
