import * as jquery from 'jquery';
import * as cheerio from 'cheerio';

async function selectHtml(url, cssSelector) {
    const $ = await cheerio.fromURL(url);
    console.log($);
}