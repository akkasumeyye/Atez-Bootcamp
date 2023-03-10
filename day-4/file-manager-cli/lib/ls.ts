import * as fs from 'fs';
import * as path from 'path';

export function ls(): void {
    console.log("Dosyalar:");
    console.log("--------------------");
    const currentDir = process.cwd();
    fs.readdirSync(currentDir).forEach(file => {
        const fullPath = path.join(currentDir, file);
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
            console.log(`Klasör: ${file}`);
        } else {
            console.log(`Dosya: ${file}`);
        }
    });
}