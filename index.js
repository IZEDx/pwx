#! /usr/bin/env node

const url = require("url");
const yargs = require("yargs");

yargs.command("* <url>", "Runs a PWA.", yargs => yargs.positional("url", {
    describe: "URL of the PWA, protocol irrelevant as https is enforced.",
    type: "string",
    coerce: s => url.parse(s)
}))

require("./dist/main.js").main(yargs.argv);