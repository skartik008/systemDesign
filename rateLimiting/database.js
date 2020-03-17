const database = {
    ['index.html']: '<html>Hello World! Kartik here. :)</html>\n',
};

// This code introduces the delay for every load
module.exports.get = (key,callback) => {
    setTimeout(() => {
        callback(database[key]);
    }, 1000);
};
