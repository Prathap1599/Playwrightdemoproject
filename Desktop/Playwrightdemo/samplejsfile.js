const { chromium } = require('playwright');  

(async () => {
  
  const browser = await chromium.launch({ headless: false });  
  const page = await browser.newPage();  
  
  
  await page.goto('https://ai.piraiinfo.com/');  
  
  await page.locator('//input[@type="email"]').fill('prathapn1599@gmail.com')
  await page.locator('//button[@type="submit"]').click()
  await page.waitForTimeout(30000);  
  
 
  await browser.close();
})();
