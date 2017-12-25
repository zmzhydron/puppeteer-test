const puppeteer = require('puppeteer');
let headless = true;
(async () => {
  const browser = await puppeteer.launch({ executablePath: 'C:/Users/zmz/Desktop/chrome-win32/chrome.exe', headless, });
  const page = await browser.newPage();
  /**
   *  注册console事件，当被读取的页面里有console的事件的时候，如果没有添加事件是不会调用console事件
   */
  page.on('console', msg => {
    for (let i = 0; i < msg.args.length; ++i)
      console.log(`${i}: ${msg.args[i]}`);
  });
  page.on("requestfinished", asdf => {
    // console.log("shit man~~ requestfinished");
  })
  // await page.goto('http://10.0.2.203:8088/#/departments/dataprocess/logperson');
  await page.goto('http://www.baidu.com');
  // const result = await page.evaluate(() => {
  //   return Promise.resolve(window.document.querySelector("body").innerHTML);
  // });
  // console.log(result);
  let juju = await page.$eval("body", e => {
    return e.querySelector(".qrcodeCon").innerHTML;
  })
  let fufu = await page.$("img");

  let content = await page.content();
  // console.log(content);
  // let src = await fufu.toString();
  console.log(fufu.toString(), `..............`);
  console.log(juju );
  // fufu.then(val => {
  //   console.log(val.getProperty("src"));
  //   // console.log(val[0].innerHTML, `....................`);
  // })
  await page.screenshot({ path: '1234.png' })
  await browser.close();
})();