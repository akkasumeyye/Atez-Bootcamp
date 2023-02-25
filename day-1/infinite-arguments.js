
function printArguments(...args) {
    return args.reduce((accum, val) => accum * val, 1);
  }


 
 console.log(printArguments('hello',1,2)); // NaN string deger sebebiyle
 console.log(printArguments('hello','haci')); //NaN

 // PEKİ STRİNG DEGER ALMASIN SADECE SNUMBER DEGERLERİ PARAMETRE OLARAK KABUL ETSİN İSTİYORSAK NAPARIZ?

 // önce filtrele number değerleri bul sonra işlemi yap

 function printArgumentsNumber(...args) {
  let num = args.filter(x => typeof x == "number")
  return num.reduce((accum, val) => accum * val, 1);
}

console.log(printArgumentsNumber('hello',1,2,4)); // 

// git status
// git add .
// git commit -a -m "lesson assigments"
// git push