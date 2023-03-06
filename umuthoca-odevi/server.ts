import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  let filePath = path.join(__dirname, 'pages', req.url ? req.url.replace(/[#\\?]/g, '') : '');
  if (filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  }

  const fileExt = path.extname(filePath);
  let contentType: string;

  switch (fileExt) {
    case '.html':
      contentType = 'text/html';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    default:
      contentType = 'application/octet-stream';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('Page not found');
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
