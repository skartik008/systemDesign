
// Program to demonstrate how http proxy work

const express = require('express');
const app = express();

app.use(express.json());

var port=3003;

app.listen(port, () => console.log('Listening on port '+ port +'.'));

app.get('/hello',(req,res) => {
	console.log('Headers:', req.headers);
	res.send('This program is a demo for proxy!\n');
});
