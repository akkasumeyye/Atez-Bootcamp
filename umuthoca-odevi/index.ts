// 1 - Bir text dosyasının içine istediğimiz cümleyi yazacak bir fonksiyon yazılması (New line olarak yazılması gerekmekte)
import fs from 'fs';

function writeToTextFile(filePath: string, sentence: string): void {
  fs.appendFileSync(filePath, `${sentence}\n`);
}

writeToTextFile('example.txt', 'Merhaba Dünya');
writeToTextFile('example.txt', 'Bu yeni bir satir');

// 2 - Bir text dosyasının belirtilen lokasyondan istenilen lokasyana bir kopyasının oluşturulması için fonksiyon yazılması
// console.log("Current Directory: ", __dirname);
// /home/sumeyye/Desktop/atez-bootcamp/Atez-Bootcamp/umuthoca-odevi/example.txt

import path from 'path';

function copyFileToDirectory(sourceFilePath: string, destinationDirectoryPath: string, destinationFileName: string): void {
  const destinationFilePath = path.join(destinationDirectoryPath, destinationFileName);
  fs.copyFileSync(sourceFilePath, destinationFilePath);
}

copyFileToDirectory('example.txt', '/home/sumeyye/Desktop/atez-bootcamp/Atez-Bootcamp/umuthoca-odevi', 'example_copy.txt');


// 3 - Belirtilen lokasyandaki dosya veya dosyaları zip dosyası haline getirecek bir fonksiyon yazılması
import archiver from 'archiver';

function zipDirectory(sourceDirectoryPath: string, destinationFilePath: string) {
  const output = fs.createWriteStream(destinationFilePath);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', function() {
    console.log(`${archive.pointer()} total bytes`);
    console.log('archiver has been finalized and the output file descriptor has closed.');
  });

  archive.on('error', function(err: any) {
    throw err;
  });

  archive.pipe(output);

  const files = fs.readdirSync(sourceDirectoryPath);

  files.forEach(function(file) {
    const filePath = path.join(sourceDirectoryPath, file);
    archive.file(filePath, { name: file });
  });

  archive.finalize();
}

const sentence = "This is a sentence.";
const filePath = path.join(__dirname, "file.txt");
fs.appendFileSync(filePath, `${sentence}\n`);

zipDirectory('/home/sumeyye/Desktop/atez-bootcamp/Atez-Bootcamp/umuthoca-odevi', 'example.zip');



