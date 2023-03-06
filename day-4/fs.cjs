const fs = require('fs');
const path = require('path');

// console.log('Path', path);

fs.exists('newFile1.txt', function (exists) {
    console.log(exists? 'Buldum onu': 'Bulamadim');
    if (exists) {
        fs.readFile("newFile.txt", 'utf8', function (err, data) {
            console.log('Data', err, data);
        })
    } else {
        throw Error('Boyle bir dosya yok');
    }
});
