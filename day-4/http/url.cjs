const url = require('url');
const websiteUrl = "http://www.atez.com.tr:8080/about";
const websiteUrlEN = "http://www.atez.com.tr:8080/en/about";


const urlParams = url.parse(websiteUrl);
const urlParamsEn = url.parse(websiteUrlEN);
console.log(urlParams);
console.log('EN', urlParamsEn);

// Odev => en de ru ae

// http://www.atez.com.tr:8080/ru/trabzon
// http://www.atez.com.tr:8080/ru/depo-antrupo
// http://www.atez.com.tr:8080/en/bekleyen-ilanlar
