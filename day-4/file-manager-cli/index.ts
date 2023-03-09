import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';


class FileManager {
    private currentDir: string;

    constructor() {
        this.currentDir = process.cwd();
    }

    public ls(): void {
        console.log("Dosyalar:");
        console.log("--------------------");
        fs.readdirSync(this.currentDir).forEach(file => {
            const fullPath = path.join(this.currentDir, file);
            const stats = fs.statSync(fullPath);
            if (stats.isDirectory()) {
                console.log(`Klasör: ${file}`);
            } else {
                console.log(`Dosya: ${file}`);
            }
        });
    }

    public cd(folderName: string): void {
        if (!folderName || typeof folderName !== "string") {
            console.error("Invalid folder name");
            return;
        }
    
        const newDir = path.resolve(this.currentDir, folderName);
    
        fs.stat(newDir, (err, stats) => {
            if (err) {
                console.error(err);
                return;
            }
    
            if (stats.isDirectory()) {
                this.currentDir = newDir;
                console.log(`New directory: ${this.currentDir}`);
            } else {
                console.error("Not a directory");
            }
        });
    }
     

    public upFolder(): void {
        this.currentDir = path.resolve(this.currentDir, '..');
        console.log(`Yeni dizin: ${this.currentDir}`);
    }

    public os(command: string): void {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
    }
    

    public copy(source: string, destination: string): void {
        fs.copyFileSync(source, path.join(this.currentDir, destination));
        console.log(`Kopyalanan dosya: ${destination}`);
    }

    public rename(oldName: string, newName: string): void {
        fs.renameSync(path.join(this.currentDir, oldName), path.join(this.currentDir, newName));
        console.log(`${oldName} dosyasının adı değiştirildi: ${newName}`);
    }
    
    public moveFile(oldPath: string, newPath: string): void {
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
      
}

export default FileManager;
