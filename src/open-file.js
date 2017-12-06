const {
    readFile
} = require('fs');

module.exports = function openFile(file) {
    return new Promise((resolve, reject) => readFile(file, 'utf8', (err, data) => {
        if (err) {
            reject(err);
        }

        resolve(data);
    }));
};