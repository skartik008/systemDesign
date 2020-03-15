
const database = {
    ['index.html']: '<html>Hello World! Kartik here. :)</html>',
};

module.exports.get = (key,callback) => {
    setTimeout(() => {
        callback(database[key]);
    }, 3000);
};