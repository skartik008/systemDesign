
## Prerequisites
**nginx**
- *Install using brew install nginx*  
- run using the command *sudo nginx*

## To execute, please open three instances of the terminal

### Running the server, in two different ports
In one of the terminal run the command  
**PORT=3004 node server.js**  

### In another terminal, the following to run the server on another port
**PORT=3005 node server.js**  

### In another terminal, the following to make the request
curl localhost:8081/hello

### Output
We will observe a different port number everytime
