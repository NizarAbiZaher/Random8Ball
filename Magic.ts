var prompt = require('prompt-sync')();

const question = prompt('Enter your question for Magic 8 Ball: ');

// random number between 1 and 8
const randNumber = Math.floor(Math.random() * 8) + 1;

// switch statement to
switch (randNumber) {
    case 1:
        console.log('It is certain');
        break;
    case 2:
        console.log('It is decidedly so');
        break;
    case 3:
        console.log('Reply hazy try again');
        break;
    case 4:
        console.log('Cannot predict now');
        break;
    case 5:
        console.log('Do not count on it');
        break;
    case 6:
        console.log('My sources say no');
        break;
    case 7:
        console.log('Outlook not so good');
        break;
    case 8:
        console.log('Signs point to yes');
        break;
}