// 2 - Bir text dosyasının belirtilen lokasyondan istenilen lokasyana bir kopyasının oluşturulması için fonksiyon yazılması
// console.log("Current Directory: ", __dirname);
// /home/sumeyye/Desktop/atez-bootcamp/Atez-Bootcamp/umuthoca-odevi/example.txt

import path from 'path';
import fs from 'fs';

function copyFileToDirectory(sourceFilePath: string, destinationDirectoryPath: string, destinationFileName: string): void {
  const destinationFilePath = path.join(destinationDirectoryPath, destinationFileName);
  fs.copyFileSync(sourceFilePath, destinationFilePath);
}

copyFileToDirectory('example.txt', path.join(__dirname), 'example_copy.txt');