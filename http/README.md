
## To execute, please open two instances of the terminal

### Running the server
In one of the terminal run the command \n
**node server.js**

### In another terminal, run any of the following

**GET method** \n
curl --header 'content-type: application/json' localhost:3000/hello

curl --header localhost:3000/hello

**POST method**\n
curl --header 'content-type: application/json' localhost:3000/hello --data '{"foo":"bar"}'
