
const fs = require('fs');
const express = require('express');

const app = express();

const staticConfig = JSON.parse(fs.readFileSync('static_config.json'));

var port=3001;

app.listen(port, () =>
  console.log('Listening on port '+ port +'.')
);

app.get('/static/new_feature.html', function(req,res){
  if(!staticConfig.newFeatureLaunched){
    res.status(401).send('Unauthorized\n');
    return;
  }
  res.send('<html>Hello World! Kartik here.</html>\n');
});
