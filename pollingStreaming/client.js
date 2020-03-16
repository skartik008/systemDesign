const helpers = require('./helper.js');
const messageApi = require('./message_api.js');
const readLine = require('readline');

const displayedMessages = {};

const terminal = readLine.createInterface({
    input: process.stdin,
});

terminal.on('line', text =>{
  const username = process.env.NAME;
  const id = helpers.getRandomInt(100000);
  displayedMessages[id] = true;

  const message = {id,text,username};
  messageApi.sendMessages(message);
});

function displayMessage(message){
  console.log(`> ${message.username}: ${message.text}`);
  displayedMessages[message.id] = true;
}

async function getAndDisplayMessages(){
  const messages = await messageApi.getMessages();

  for(const message of messages){
    const messageAlreadyDisplayed = message.id in displayedMessages;
    if(!messageAlreadyDisplayed) displayMessage(message);
  }
}

function pollMessages(){
  setInterval(getAndDisplayMessages, 5000);
}

function streamMessages(){
  const messagingSocket = messageApi.createMessageSocket();
  messagingSocket.on('message', data =>{
    const message = JSON.parse(data);
    const messageAlreadyDisplayed = message.id in displayedMessages;
    if(!messageAlreadyDisplayed) displayMessage(message);
  });
}

if(process.env.MODE === 'poll'){
  getAndDisplayMessages();
  pollMessages();
}else if(process.env.MODE === 'stream'){
  getAndDisplayMessages();
  streamMessages();
}
