import FileManager from "./index"
import { Command } from "commander";


const fileManager = new FileManager();
const figlet = require("figlet");
console.log(figlet.textSync("File Manager"));


// fileManager.ls();
fileManager.cd("deneme");
// fileManager.moveFile('/home/sumeyye/Desktop/atez-bootcamp/Atez-Bootcamp/day-4/file-manager-cli/tasinacak.txt','/home/sumeyye/Desktop/atez-bootcamp/Atez-Bootcamp/day-4/file-manager-cli/deneme/tasinacak.txt');
// fileManager.upFolder();
fileManager.os('userInfo')
// fileManager.copy('dosya1.txt', 'dosya2.txt');
// fileManager.rename('dosya1.txt','dosya1rename.txt');



