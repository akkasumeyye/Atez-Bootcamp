// 3 - Belirtilen lokasyandaki dosya veya dosyaları zip dosyası haline getirecek bir fonksiyon yazılması
import archiver from 'archiver';
import fs from 'fs';
import path from 'path';



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

zipDirectory(path.join(__dirname), 'example.zip');
