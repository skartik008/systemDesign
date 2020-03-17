
## To execute, please open five instances of the terminal

### Running the etcd server
In one of the terminal run the command  
**etcd**

### In terminal for server1
**python leaderElection.py server1**

### In terminal server2
**python leaderElection.py server2**

### In terminal server3
**python leaderElection.py server3**

### In terminal server4
**python leaderElection.py server4**

#### Output explained
While one of the instance is the leader, others will follow. As soon as the leader server goes down, election happens to find a leader.
