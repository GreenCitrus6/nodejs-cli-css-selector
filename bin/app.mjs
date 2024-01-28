#!/usr/bin/env node
import yargs from 'yargs';
import * as jquery from 'jquery';
import * as cheerio from 'cheerio';

// const options = yargs 
//     .usage("Usage: -n <name>")
//     .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true})
//     .argv;

const options = yargs 
    .usage("Usage: -u <url> -s <selector>")
    .option("u", { alias: "url", describe: "Target page URL", type: "string", demandOption: true })
    .option("s", { alias: "selector", describe: "CSS Selector", type: "string", demandOption: true })
    .argv;

const greeting = `Hello, ${options.url} ${options.selector}`;

console.log(greeting);

// async function selectHtml(url, cssSelector) {
//     const $ = await cheerio.fromURL(url);
//     console.log($);
// }