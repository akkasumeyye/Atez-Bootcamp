import * as fs from 'fs';
import * as path from 'path';

let currentDir = process.cwd();


export function upFolder(): void {
    currentDir = path.resolve(currentDir, '..');
    console.log(`Yeni dizin: ${currentDir}`);
}


