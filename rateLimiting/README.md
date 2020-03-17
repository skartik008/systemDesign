
## To execute, please open three instances of the terminal

### Running the server
In one of the terminal run the command  
**node server.js**

### In another terminal, please do the following
**curl -H 'user: Kartik' localhost:3002/index.html**

### Terminal instance 3, please do the following
**curl -H 'user: Sai' localhost:3002/index.html**

#### Rate Limit
If user resubmits the request 1 within 10 secs of making request 1, will get error, but can make request 2 immediately. Rate limiting is happening on the basis of the key user in the header that is passed.
