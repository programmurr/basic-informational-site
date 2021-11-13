const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

function serve404(req, res) {
  res.sendFile(path.join(__dirname, '/public/404.html'));
}

// If no middleware of routes can be used, 404
app.use(serve404);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
