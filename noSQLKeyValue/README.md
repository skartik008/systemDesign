
# To execute, please open two tab instances of the browser and one instance of terminal

## Installing redis server
**brew install redis**

## Installing redis server commander
**npm install -g redis-commander**

### Running the server
In the terminal run the command  
**node server.js**

### Running the redis server
In the terminal run the command  
**redis-server /usr/local/etc/redis.conf**

### Running the redis server GUI
In the terminal run the command and then open the address in the console in the browser
**redis-commander**

### In one browser tab

#### **No Cache**  
http://localhost:3006/nocache/index.html  
*Every time the page will take time to load*


#### **With Cache**  
http://localhost:3006/withcache/index.html  
*First time the page will take time to load, but after that refresh will be instantaneous, since expiry set to 10 seconds, page will reload after 10 seconds*
