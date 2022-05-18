const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const Jimp = require('jimp');
const pixelmatch = require('pixelmatch');
const { cv } = require('opencv-wasm');


async function openTiktok() {
  const browser = await puppeteer.launch({headless: false}); //open browser
  const page = await browser.newPage();
  await page.goto('https://www.tiktok.com/he-IL/')
  // await page.goto('https://bot.sannysoft.com') // test detection

  // search for category
  await page.type(".tiktok-vzysje-InputElement",'memes trending',{delay: 15})
  await page.click('[data-e2e="search-button"]')

  // solve captcha

  // wait for slider to apear 
  await page.waitForTimeout(1000)
  await page.waitForSelector('.fiQtnm');
  console.log('slider is present');
  await page.waitForTimeout(1000)
  const img = await page.waitForSelector('#captcha-verify-image')
  console.log('image is present');
  console.log(img.currentSrc);
  console.log(img.src);
  
  // get captcha img

}
openTiktok()
