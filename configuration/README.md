
## To execute, please open two instances of the terminal

### Running the server
In one of the terminal run the command  
**node server.js**

### In another terminal, the following

#### With newFeatureLaunched: false
**curl localhost:3001/static/new_feature.html**
*User will get Unauthorized*

##### With newFeatureLaunched: false (need to quit and start the server again)
**curl localhost:3001/static/new_feature.html**
*User will get the page*

#### Configuration changes made without restarting the server will not take effect
