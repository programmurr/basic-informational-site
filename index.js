const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

function serveIndex(req, res) {
  res.sendFile(path.join(__dirname, '/pages/index.html'));
}

function serveAbout(req, res) {
  res.sendFile(path.join(__dirname, '/pages/about.html'));
}

function serveContact(req, res) {
  res.sendFile(path.join(__dirname, '/pages/contact-me.html'));
}

function serve404(req, res) {
  res.sendFile(path.join(__dirname, '/pages/404.html'));
}

function serveCSS(req, res) {
  res.sendFile(path.join(__dirname, '/assets/style.css'));
}

app.get('/', serveIndex);
app.get('/index', serveIndex);
app.get('/about', serveAbout);
app.get('/contact-me', serveContact);
app.get('/assets/style.css', serveCSS);

// If no middleware of routes can be used, 404
app.use(serve404);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
