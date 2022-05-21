const fs = require('fs');
const path = require('path');
const { mkdir,copyFile  } = require('fs');
const { stat } = require('fs');
//const { copyFile } = require('fs');

//console.log(fs);
// files-copy

const destDirPath = path.join(__dirname, 'files-copy');
const srctDirPath = path.join(__dirname, 'files');


mkdir(`${destDirPath}`, { recursive: true }, (err) => {
    if (err) {
        console.log('ERROR', err);
        throw err; 
    };

    fs.readdir(`${srctDirPath}`,(err, files) => {            //!{withFileTypes: true},
        files.forEach((elem, index) => {
            //*console.log(elem);
    
            const srcFilePath = path.join(srctDirPath, elem);
            const destFilePath = path.join(destDirPath, elem);
    
            copyFile(`${srcFilePath}`, `${destFilePath}`, () => {
                if (err) throw err;
                console.log(`\n ${elem} was copied to destination directory \n --> ${destDirPath}`);
            });
        })
    })
});

