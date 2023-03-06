import process from 'process';
import os from 'os';
// const process = require('process');

console.log(process.argv);
console.log("Env", process.env);
console.log("Develpment env", process.env.NODE_ENV)

const isDev = process.env.NODE_ENV === 'development';

console.log(isDev ? "Dev ortamindayim debug edebilirim" : "Prod Ortamdayim debug edemem");

console.log('ATEZ', process.env.ATEZ_BOOTCAMP);

console.log('PWD', process.cwd());
console.log('Platform', process.platform)

// Operating System
console.log(os.hostname(), os.cpus(), os.uptime());

// Commonjs
// Modulejs
