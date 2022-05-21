
//const process = require('process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const writeStream = fs.createWriteStream(`${path.join(__dirname, 'text.txt')}`);



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



console.log('\n \n ENTER YOUR TEXT \n \n');



rl.on('line', answer => {
    if (answer.trim() == 'exit') rl.close();
    writeStream.write(`${answer}`);
    console.log('\n \n ENTER YOUR TEXT \n \n');

})




rl.on('close', () => {
    process.exit();
});

process.on('SIGINT', () => {
    process.exit();
});


process.on('exit', () => {
    console.log('\n Thaks')
});




//! ВЕШАТЬ СЛУШАТЕЛЬ ЧЕРЕЗ SWITCH????
//ToDoo реадизовать обработку событий через switch
//ToDoo     process.on('exit', (code) => {
//ToDoo //  console.log(`About to exit with code: ${code}`);
//ToDoo //  });
//ToDoo НАПИСАТЬ EVENTHADLER  ДЛЯ  ОБРАБОТКИ СОБЫТЬТТИЯ  EXIT B CTR+C ДЛЯ ЗАКРЫТИ Я ПОТОКА ЧТЕНИЯ
//ToDoo (ТИП НАПИСАТЬ СВОЙ ИВЕНТ С КОЛБЭКОМ НА ЗАКРЫТИЕ СТРАНИЦЫ)