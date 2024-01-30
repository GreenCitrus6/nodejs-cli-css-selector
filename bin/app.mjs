#!/usr/bin/env node
import yargs from 'yargs';
import axios, * as others from 'axios';
import * as jquery from 'jquery';
import * as cheerio from 'cheerio';

const options = yargs 
    .usage("Usage: -u <url> -s <selector>")
    .option("u", { alias: "url", describe: "Target page URL", type: "string", demandOption: true })
    .option("s", { alias: "selector", describe: "CSS Selector", type: "string", demandOption: true })
    .argv;

const response = await axios.get(options.url);
const html = response.data;
const $ = cheerio.load(html);

const selectedHtml = $(`${options.selector}`).html();

console.log(selectedHtml);