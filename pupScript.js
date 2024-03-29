const puppeteer = require('puppeteer');
puppeteer.launch({headless:false}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1000 })
  await page.goto('https://www.google.com/maps');
  const title = await page.title()
  console.log(title)
  const html = await page.content();

 await page.focus('#searchboxinput')
 await page.keyboard.type('Destination Address Here');
 await page.waitFor(5000);
 page.keyboard.press('Enter');
 await page.waitFor(5000);
 page.click('#pane > div > div.widget-pane-content.scrollable-y > div > div > div.section-layout.section-layout-space-between.section-layout-flex-vertical.section-layout-flex-horizontal > div.iRxY3GoUYUY__actionicon.iRxY3GoUYUY__actionicon-text.iRxY3GoUYUY__promoted.iRxY3GoUYUY__high-contrast > div')
 await page.waitFor(5000);
 await page.focus('#sb_ifc51');
 await page.keyboard.type('Start Address Here');
 await page.waitFor(5000);
 page.keyboard.press('Enter');
 await page.waitFor(5000);
 await page.click('#pane > div > div.widget-pane-content.scrollable-y > div > div > div.section-directions-options.white-foreground.noprint > button.section-directions-options-link > span:nth-child(1)')
 //await page.mouse.click();
 await page.waitFor(5000);
 await page.click('#pane > div > div.widget-pane-content.scrollable-y > div > div > div.section-directions-options.white-foreground.noprint > div.section-directions-options-route-options.route-options-card > div > div.directions-options-drive > div:nth-child(1) > label:nth-child(6)')
 await page.waitFor(10000)

 //await page.type(String.fromCharCode(13));  // Enter Keycode

//save our html in a file
  //fs.writeFile('page.html', html, _ => console.log('HTML saved'));
  //await page.screenshot({ path: 'myscreenshot12.png', fullPage: true });
  await browser.close();
});
