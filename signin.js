const puppeteer = require('puppeteer')

const SECRET_EMAIL = process.env.EMAIL
const SECRET_PASSWORD = process.env.PASSWORD

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage()
  await page.goto('https://facebook.com', { waitUntil: 'networkidle2' })
  await page.waitForSelector('#login_form')
  await page.type('input#email', SECRET_EMAIL)
  await page.type('input#pass', SECRET_PASSWORD)
  await page.click('#loginbutton')
  // await browser.close()
}

main()