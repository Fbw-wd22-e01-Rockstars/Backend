//import chalk from 'chalk';
//import {getBanana,getNotes} from "./notes.js";


//const msg = banana()

//const banana = getBanana()

//console.log(msg);
//console.log(banana);

// console.log(chalk.bgRed.blue('Hello world!'));

//const argvs = process.argv.slice(2) // ['/../../node', '/User/dilshod/../index.js']

// const numbers = argvs.map(num=>parseInt(num))

// console.log(numbers);

//console.log(argvs); 

const argvs = process.argv.slice(2);

//console.log(argvs[0]);

const func1 = () => {
    console.log("Hi, I am function 1");
}

const func2 = () => {
    console.log("Hi, I am function 2");
}

switch (argvs[0]) {
    case 'func1':
        func1()
        break;
    case 'func2':
        func2()
        break;
    default:
        break;
}

