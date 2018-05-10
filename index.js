#! /usr/bin/env node

const url = require("url");
const yargs = require("yargs");
const locateChrome = require("locate-chrome");
const pwx = require("./dist/main.js");

yargs.command("* <url>", "Runs a PWA.", yargs => yargs.positional("url", {
    describe: "URL of the PWA, protocol irrelevant as https is enforced.",
    type: "string",
    coerce: s => url.parse(s)
}))

const f = l => pwx.main(yargs.argv, l);
locateChrome(f).catch(() => f());