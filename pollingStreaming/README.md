## Need four instances of terminal

### Terminal 1
**node server.js**

### Terminal 2
**MODE=stream NAME=Kartik node client.js**

### Terminal 3
**MODE=poll NAME=Sai node client.js**

### Terminal 4
**(for i in `seq 1 10000`; do sleep 1; echo $i; done) | NAME=Bot node client.js**
