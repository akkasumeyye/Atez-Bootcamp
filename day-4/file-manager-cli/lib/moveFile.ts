import * as fs from 'fs';
import * as path from 'path';

export function moveFile(oldPath: string, newPath: string): void {
    const oldFilePath = path.resolve(oldPath);
    const newFilePath = path.resolve(newPath);
  
    fs.copyFile(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.error(err);
        return;
      }
  
      fs.unlink(oldFilePath, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`${oldFilePath} moved to ${newFilePath}`);
      });
    });
  }