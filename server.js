const port = 3000;
const express = require("express");
const app = express();
const webpack = require('webpack');


app.use(express.json());

app.use(express.static(__dirname + '/dist'));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
})