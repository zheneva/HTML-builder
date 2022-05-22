const fsPromises = require('fs/promises');
const path = require('path');
const { mkdir, copyFile, stat, readFile } = require('fs');


const srcdirPath = path.join(__dirname, 'styles');
const destdirPath = path.join(__dirname, 'project-dist', 'bundle.css');


// console.log(srcdirPath);
let allFilesstyles = [];

(async () =>  {
    
    const files= await fsPromises.readdir(`${srcdirPath}`, { withFileTypes: true });      

        for (let elem of files) {
            const addr = path.join(srcdirPath, elem.name);
            if (path.extname(addr) == '.css') {
                const FileContent = await fsPromises.readFile(addr, 'utf8');
                allFilesstyles.push(`${FileContent}\n`);
            }

        }
    await fsPromises.writeFile(destdirPath, allFilesstyles);
})();

// PromisFun.then( console.log('CONTENT LENGTH',allFilesstyles.length));

// setTimeout(() => {
//     console.log('CONTENT LENGTH',allFilesstyles.length);
// }, 3000);

//console.log('CONTENT LENGTH', );