const puppeteer = require('puppeteer');

test('Adds two numbers', () => {
  const sum = 1 + 2;

  expect(sum).toEqual(3);
})

test('We can launch a browser', async () => {
  // open browser
  const browser = await puppeteer.launch({
    headless: false
  });
  // open single page
  const page = await browser.newPage();
})
