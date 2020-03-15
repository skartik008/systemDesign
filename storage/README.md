
## To execute, please open two instances of the terminal

### Running the server
In one of the terminal run the command  
**node databaseserver.js**

### In another terminal, the following

#### **Volatile Memory, i.e. storing in memory**  
##### Putting the data
**curl localhost:3001/memory/foo --header 'content-type: application/json' --data '{"data":"This is some data on memory."}'**


##### Getting the data
**curl localhost:3001/memory/foo -w "\n"**

*Data gets lost when server is stopped*

#### **Persistent Storage, i.e. storing in database**

##### Putting the data  
**curl localhost:3001/disk/foo --header 'content-type: application/json' --data '{"data":"This is writing data on disk."}'**  
##### Getting the data   
**curl localhost:3001/disk/foo -w "\n"**  
*Data is retained, even if the server is quit*
