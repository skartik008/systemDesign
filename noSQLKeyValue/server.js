
// Program to demonstrate the caching of the webpage

const database = require('./database');
const express = require('express');
const redis = require('redis').createClient();

const app = express();

const cache = {};

// This is for without cache, everytime we read from the index.html and load

app.get('/nocache/index.html', (req,res) => {
    database.get('index.html', page => {
        res.send(page);
    });
});

// First time read from the database and store in cache, if in cache, load immediately

app.get('/withcache/index.html', (req,res) => {
    redis.get('index.html', (err,redisRes) => {
      if(redisRes){
          res.send(redisRes);
          return;
      }

      database.get('index.html', page => {
          redis.set('index.html', page, 'EX', 120);
          res.send(page);
      });
    });
});

var port=3006;

app.listen(port, () => console.log('Listening on port '+ port +'.'));
