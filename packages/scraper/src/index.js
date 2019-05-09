import puppeteer from "puppeteer";
import fs from "fs";

// modify puppeteer functions
import '@tahy/chrome';

const driverPath = require.resolve('@tahy/driver')
const builtDriver = fs.readFileSync(driverPath, "utf-8");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(builtDriver);

  await page.goto("https://example.com#test");
  const location = await page.$aLocation();

  await browser.close();

  console.log({ location });
})()