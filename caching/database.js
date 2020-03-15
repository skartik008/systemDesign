// This file contains the code for the index.html
const database = {
    ['index.html']: '<html>Hello World! Kartik here. :)</html>',
};

// This code introduces the delay for every load
module.exports.get = (key,callback) => {
    setTimeout(() => {
        callback(database[key]);
    }, 3000);
};
