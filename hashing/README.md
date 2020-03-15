
## To execute, please open an instance of the terminal

### Run the command 
**node hashing_example.js**

### Output explained

#### **Simple Hashing Strategy**  
In this hashing method, hash of the username is calculated and the user (username) is assigned to the server corresponding to the modulus of the hash with the number of available servers. If one server is removed, the mapping changes, so does after addition of a server.


#### **Rendezvous Hashing Strategy**  
In this hashing method, a user is assigned to a server based on a score which is calculated on the basis of hashing of both the server and username. It demonstrates that the removal or addition of a server does not affect the mapping much.
