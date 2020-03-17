
const database = require('./database');
const express = require('express');

const app = express();

var port=3002;

app.listen(port, () => console.log('Listening on port '+ port +'.'));

const accesses = {};

app.get('/index.html', (req,res) => {
  const{user} = req.headers;
  if(user in accesses){
    const previousAccessTime = accesses[user];
    if(Date.now() - previousAccessTime < 10000){
      res.status(429).send('Too many requests, please try after some time\n');
      return;
    }
  }

  database.get('index.html', page => {
    accesses[user] = Date.now();
    res.send(page);
  });
});
