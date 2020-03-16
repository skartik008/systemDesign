const axios = require('axios')
const webSocket = require('ws')

function createMessageSocket(){
  return new webSocket('ws://localhost:6000/messages');
}

function getMessages(){
  return axios.get('http://localhost:6000/messages').then(res => res.data);
}

function sendMessages(message){
  return axios.post('http://localhost:6000/messages', message);
}

module.exports.createMessageSocket = createMessageSocket;
module.exports.getMessages = getMessages;
module.exports.sendMessages = sendMessages;
