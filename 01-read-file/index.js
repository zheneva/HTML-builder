//?console.log('read-file-task')

const fs = require('fs');
const path = require('path');

//console.log('path=', path.join(__dirname, '/index.js'));

const readStream = fs.createReadStream(`${path.join(__dirname, '/text.txt')}`);

readStream.on('data', chunk => {
    // console.log('STARTS');
    // console.log(chunk.toString());
    // console.log();

    console.log(chunk.toString());

});
