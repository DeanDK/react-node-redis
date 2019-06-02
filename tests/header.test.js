const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => {
  // open browser
  browser = await puppeteer.launch({  headless: false  });

  // open empty tab
  page = await browser.newPage();

  // navigate to localhost
  await page.goto('localhost:3000');
});

afterEach(async () => {
  await browser.close();
})

test('the header has the correct text', async () => {
  // fetch the text of DOM element
  const text = await page.$eval('a.brand-logo', el => el.innerHTML);

  expect(text).toEqual('Blogster');
})

test('clicking login starts oauth flow', async() => {
  await page.click('.right a');

  const url = await page.url();

  expect(url).toMatch(/accounts\.google\.com/);
})
