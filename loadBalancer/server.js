
// Program to demonstrate how http proxy work

const express = require('express');
const app = express();

app.use(express.json());

const port= process.env.PORT;

app.listen(port, () => console.log('Listening on port '+ port +'.'));

app.get('/hello',(req,res) => {
	console.log('Headers:', req.headers);
	res.send(`This is response from ${port}!\n`);
});
