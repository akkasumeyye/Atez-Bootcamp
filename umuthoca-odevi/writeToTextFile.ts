// 1 - Bir text dosyasının içine istediğimiz cümleyi yazacak bir fonksiyon yazılması (New line olarak yazılması gerekmekte)
import fs from 'fs';

function writeToTextFile(filePath: string, sentence: string): void {
  fs.appendFileSync(filePath, `${sentence}\n`);
}

writeToTextFile('example.txt', 'Merhaba Dünya');
writeToTextFile('example.txt', 'Bu yeni bir satir');