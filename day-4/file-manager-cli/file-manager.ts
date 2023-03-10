
import commander from 'commander';
import { getOSInfo } from "./lib/getOsInfo";
import { renameFile } from './lib/rename';
import { cd } from './lib/cd';
import { ls } from './lib/ls';
import { upFolder } from './lib/upFolder';
import {copyFile} from './lib/cp';
import { moveFile } from './lib/moveFile';

const figlet = require("figlet");
const program = new commander.Command();


console.log(figlet.textSync("File Manager"));


program
  .command('ls')
  .description('List files and directories in the current directory')
  .action(ls);

program
  .command('cd <folderName>')
  .description('Change the current directory')
  .action((folderName) => {
    cd(folderName);
  });

program
  .command('up')
  .description('Go up one directory')
  .action(() => {
    upFolder();
  });

program
  .command('copy <source> <destination>')
  .description('Copy a file')
  .action((source, destination) => {
    copyFile(source, destination);
  });

program
  .command('rename <oldName> <newName>')
  .description('Rename a file')
  .action((oldName, newName) => {
    renameFile(oldName, newName);
  });

program
  .command('move <oldPath> <newPath>')
  .description('Move a file')
  .action((oldPath, newPath) => {
    moveFile(oldPath, newPath);
  });

program
  .command('os <command>')
  .description('Get information about the operating system')
  .option('-p, --platform', 'display platform')
  .option('-a, --architecture', 'display architecture')
  .option('-c, --cpus', 'display cpus')
  .option('-m, --memory', 'display memory')
  .option('-h, --hostname', 'display hostname')
  .option('-n, --network', 'display network')
  .option('-uf, --userInfp', 'display userInfo')
  .action((command) => {
    console.log(getOSInfo(command));
  });

program.parse(process.argv);
