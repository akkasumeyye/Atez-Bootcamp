import * as fs from 'fs';
import * as path from 'path';

export function renameFile(oldName: string, newName: string): void {
    fs.renameSync(path.join(process.cwd(), oldName), path.join(process.cwd(), newName));
    console.log(`${oldName} dosyasının adı değiştirildi: ${newName}`);
}
