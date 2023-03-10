import { platform, arch, cpus, totalmem, freemem, hostname, networkInterfaces, userInfo } from 'os';

type Command = 'os' | 'platform' | 'architecture' | 'cpus' | 'memory' | 'hostname' | 'network' | 'userInfo';

export function getOSInfo(command: Command): string {
  switch (command) {
    case 'platform':
      return platform();
    case 'architecture':
      return arch();
    case 'cpus':
      return JSON.stringify(cpus(), null, 2);
    case 'memory':
      return `Total Memory: ${Math.round(totalmem() / 1024 / 1024)} MB\nFree Memory: ${Math.round(freemem() / 1024 / 1024)} MB`;
    case 'hostname':
      return hostname();
    case 'network':
      return JSON.stringify(networkInterfaces(), null, 2);
    case 'userInfo':
      return JSON.stringify(userInfo(), null, 2);
    default:
      throw new Error(`Unknown command: ${command}`);
  }
}

