import * as fs from 'fs';
import * as path from 'path';

export function copyFile(source: string, destination: string): void {
    const currentDir = process.cwd();
    fs.copyFileSync(source, path.join(currentDir, destination));
    console.log(`Kopyalanan dosya: ${destination}`);
}
