const { Before, BeforeAll, After, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let page;

BeforeAll(async function () {
    console.log("Open the browser");
    
    browser = await chromium.launch({ headless: false }); 
    const context = await browser.newContext({ acceptDownloads: true });
    page = await context.newPage();
});

AfterAll(async function () {
    

    if (browser) {
        await browser.close(); 
    }
    console.log("close the browser");
});
