#!/usr/bin/env node

"use strict";

// Get the heading provided by the user from the terminal.
const heading = process.argv[2];

const width = 70;
const line = "=".repeat(width);
const title = heading.toUpperCase();

// Divide the remaining space equally between the two sides of the title.
// The -2 reserves one space on each side of the title.
const dashCount = Math.floor((width - title.length - 2) / 2);
const dashes = "-".repeat(dashCount);

// Build and print the final comment heading.
console.log("//" + line);
console.log("//" + dashes + " " + title + " " + dashes);
console.log("//" + line);
