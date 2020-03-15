
// Program to demonstrate the caching of the webpage

const database = require('./database');
const express = require('express');

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
    if('index.html' in cache){
        res.send(cache['index.html']);
        return;
    }

    database.get('index.html', page => {
        cache['index.html'] = page;
        res.send(page);
    });
});

var port=3002;

app.listen(port, () => console.log('Listening on port '+ port +'.'));
