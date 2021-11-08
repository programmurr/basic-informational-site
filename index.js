const https = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const contactMe = fs.readFileSync('contact-me.html');
const notFound = fs.readFileSync('404.html');

const port = 3000;

const server = https.createServer((req, res) => {
  const url = req.url.slice(1);
  if (url === "") {
    res.writeHead(200, 'Content-Type', 'text/html');
    res.end(index);
  } else if (url === "about") {
    res.writeHead(200, 'Content-Type', 'text/html');
    res.end(about);
  } else if (url === "contact-me") {
    res.writeHead(200, 'Content-Type', 'text/html');
    res.end(contactMe);
  } else {
    res.writeHead(404, 'Content-Type', 'text/html');
    res.end(notFound);
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});