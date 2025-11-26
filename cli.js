
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var permutation_1 = require("./permutation");

var args = process.argv.slice(2);
if (args.length === 0) {
    console.error("Valid Commands:");
    console.error("  node cli.js <6-digit-number>");
    console.error("  node cli.js -r <6-digit-number>");
    console.error("  node cli.js -v");
    process.exit(1);
}

if (args[0] === "-r") {
    var num_1 = Number(args[1]);
    if (!Number.isInteger(num_1) || num_1 < 100000 || num_1 > 999999) {
        console.error("Error: Input must be a 6-digit number.");
        process.exit(1);
    }
    console.log((0, permutation_1.unpermute6)(num_1));
    process.exit(0);
}

if (args[0] === "-v") {
    console.log("Permutation CLI version 1.1.0");
    console.log("Written by Fabio Bauer");
    process.exit(0);
}

if (args[0] === "-s") {
    console.log("GitHub:");
    console.log("https://github.com/oibafbruh/reversable6digithash");
    console.log("Licensed under MIT License. More Info under LICENSE.txt");
    process.exit(0);
}

var num = Number(args[0]);
if (!Number.isInteger(num) || num < 100000 || num > 999999) {
    console.error("Error: Input must be a 6-digit number.");
    process.exit(1);
}
console.log((0, permutation_1.permute6)(num));
