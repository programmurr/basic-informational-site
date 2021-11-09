const https = require('http');
const fs = require('fs');

const port = 3000;

const server = https.createServer((req, res) => {
  if (req.url === '/' || req.url.includes('index.html')) {
    const file = fs.readFileSync('./pages/index.html');
    res.writeHead(200, 'Content-Type', 'text/html');
    res.write(file);
    res.end();
  } else if (req.url.includes('css')) {
    const file = fs.readFileSync('.' + req.url);
    res.writeHead(200, 'Content-Type', 'text/css');
    res.write(file);
    res.end();
  } else {
    try {
      const file = fs.readFileSync('./pages/' + (req.url.slice(1)));
      res.writeHead(200, 'Content-Type', 'text/html');
      res.write(file);
      res.end();
    } catch(err) {
      const file = fs.readFileSync('./pages/404.html');
      res.writeHead(404, 'Content-Type', 'text/html');
      res.write(file);
      res.end();
    }
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});