
// This is a simple hashing function, sourced from stackoverflow.

function hashString(string){
  let hash = 0;
  if(string.length === 0) return hash;
  for(let i=0;i<string.length;i++){
    charCode = string.charCodeAt(i);
    hash = (hash << 5) - hash + charCode;
    hash |= 0;
  }
  return hash;
}

/*
This is used in Rendezvous hashing, it computes a score for the
given username and the server, based on mathematical computation
using prime numbers. The values have been picked randomly and tested
until the given values work fine.
*/

function computeScore(username, server) {
  const userNameHash = hashString(username);
  const serverHash = hashString(server);
  return (userNameHash * 13 + serverHash * 11 ) % 67;
}

module.exports.hashString = hashString;
module.exports.computeScore = computeScore;
