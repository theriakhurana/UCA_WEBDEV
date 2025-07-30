const express = require('express');
const app = express();
const path = require('path');

const port = 8080; // default port

app.use(express.static(path.join(__dirname, 'frontend')));

app.listen(port, function(){
  console.log(`Server is running on http://localhost:${port}`);
})