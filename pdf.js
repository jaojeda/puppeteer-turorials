const puppeteer = require('puppeteer')

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com', { waitUntil: 'networkidle2' })
  await page.pdf({ path: 'assets/hn.pdf', format: 'A4' })

  await browser.close()
}

main()