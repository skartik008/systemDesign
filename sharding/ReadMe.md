
## To execute, please open four instances of the terminal

### Running one server at port 4000 and storing the data at db0

**DATA_DIR=db_data0 PORT=4000 node database.js**

### Running one server at port 4001 and storing the data at db1

**DATA_DIR=db_data1 PORT=4001 node database.js**

### Running the reverse proxy server
**node server.js**

### The following POST commands stores the data at one shard

curl --header 'content-type: application/json' --data '{"data":"This is some data on key a."}' localhost:8010/a

curl --header 'content-type: application/json' --data '{"data":"This is some data on key alpha."}' localhost:8010/alpha

curl --header 'content-type: application/json' --data '{"data":"This is some data on key atom."}' localhost:8010/atom

### The following POST commands stores the data at another shard

curl --header 'content-type: application/json' --data '{"data":"This is some data on key b."}' localhost:8010/b

curl --header 'content-type: application/json' --data '{"data":"This is some data on key bar."}' localhost:8010/bar

curl --header 'content-type: application/json' --data '{"data":"This is some data on key brave."}' localhost:8010/brave

### The following GET commands retrieves the data from the first shard

curl -w "\n" localhost:8010/a

curl -w "\n" localhost:8010/alpha

curl -w "\n" localhost:8010/atom

### The following GET commands retrieves the data from the second shard

curl -w "\n" localhost:8010/b

curl -w "\n" localhost:8010/bar

curl -w "\n" localhost:8010/brave
