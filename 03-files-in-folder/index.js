const fs = require('fs');
const path = require('path');
const { stat } = require('fs');


const dirPath = path.join(__dirname, 'secret-folder');

fs.readdir(`${dirPath}`,(err, files) => {            //!{withFileTypes: true},
    files.forEach((elem, index) => {
        const addr = path.join(dirPath, `${elem}`);
        stat(addr, (err, stats) => {
            stats.isDirectory()?
                null:
                console.log(`${path.basename(addr, path.extname(addr))} - ${(path.extname(addr)).slice(1)} - ${stats.size/1000}kb`);
        });

    })
})



// stat(pathsToCheck, (err, stats) => {
//     //console.log(stats.isDirectory());
//     console.log(stats);
// });