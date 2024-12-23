const { Given, When, Then } = require('cucumber');
const { expect } = require('@playwright/test');


       
         Given('User able to open the browser', async function () {
            await page.goto('https://ai.piraiinfo.com/');  
         });

   

         When('enter user email id {string}',async function (email) {

            await page.locator('//input[@type="email"]').fill(email)
            await page.locator('//button[@type="submit"]').click()
            await page.waitForTimeout(30000);  
         });

   

         Then('enter login button',async function () {
            await page.locator('//button[@type="submit"]').click()
         });