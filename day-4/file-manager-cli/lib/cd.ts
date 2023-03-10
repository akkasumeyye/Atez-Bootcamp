import * as fs from 'fs';
import * as path from 'path';

export function cd(folderName: string): void {
    if (!folderName || typeof folderName !== "string") {
        console.error("Invalid folder name");
        return;
    }

    let currentDir = process.cwd();

    const newDir = path.resolve(currentDir, folderName);

    fs.stat(newDir, (err, stats) => {
        if (err) {
            console.error(err);
            return;
        }

        if (stats.isDirectory()) {
            currentDir = newDir;
            console.log(`New directory: ${currentDir}`);
        } else {
            console.error("Not a directory");
        }
    });
}