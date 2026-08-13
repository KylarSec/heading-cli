#!/usr/bin/env node

"use strict";

// process.argv is an array containing the things you give to Node when starting the program.
// Eg: node index.js gives
// node
// index.js
// Those become the two array values.

// console.log(process.argv);

// // let's store the whole array for example
// const arguments = process.argv;
// console.log(arguments[0]);
// console.log(arguments[1]);
//  // Here is the text we passed after node index.js
// console.log(arguments[2]);

const heading = process.argv[2];

const width = 70;

const line = "=".repeat(width);

const title = heading.toUpperCase();

// const centerDashes = "-".repeat(25);

// const titleLength = title.length;
// Take the 70-character space,
// subtract the space needed by our title,
// divide the remaining space between the two sides,
// and give me a whole number.
// -2 for reserved spaces across heading
const dashCount = Math.floor((width - title.length - 2) / 2);

const dashes = "-".repeat(dashCount);

console.log("//" + line);
// console.log("//" + dashes, title, dashes);
console.log("//" + dashes + " " + title + " " + dashes);
console.log("//" + line);

// console.log(titleLength);
