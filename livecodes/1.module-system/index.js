// const fs = require("fs")
// console.log("Hello World!");

//fs.writeFileSync("notes.txt","Hello hey hey")
//fs.appendFileSync("notes.txt", " Banana")

// const add = require("./utils.js")

// const sum = add(4,2)

// console.log(sum);

// const getNotes = require("./notes.js");

// const msg = getNotes();

// console.log(msg);

const {printDivision, printMultiplication} = require("./notes.js")

const div = printDivision(6,2);
const multi = printMultiplication(2,2)

console.log(div, multi);