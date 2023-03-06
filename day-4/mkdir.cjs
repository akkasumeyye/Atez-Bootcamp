const fs = require('fs');
const path = require('path');

const createDirectory = (directoryName) => {
    fs.mkdir(path.join(__dirname, directoryName), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Dosya olusturuldu')
    });
}

createDirectory('http');
