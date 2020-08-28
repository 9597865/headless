const timesnap = require('timesnap')
timesnap({
  headless: false,
  ignoreHTTPSErrors: false,
  launchArguments: [
    '--enable-usermedia-screen-capturing',
    '--allow-http-screen-capture',
    '--no-sandbox',
    '--auto-select-desktop-capture-source=pickme',
    '--disable-setuid-sandbox'
  ],
  async preparePage(page, browser, puppeteer) {
    //播放视频
    page.tap('#content');
    //
    page.on('console', data => {
      console.log(`running...`);
      const resData = data._text
      try {
        const { name } = JSON.parse(resData)
        if (name === 'timesnap-stop') {
          console.log('-----stop browser------')
          setTimeout(() => {
            browser.close();
          }, 5000)
        }
      } catch (error) {
        //console.log(error);
      }

    });
    await page.exposeFunction('postMsgStop', text => {
      //console.log('-----postMsgStop------')
    });
    await page.evaluate(async () => {
      const myString = 'PUPPETEER';
      const myHash = await window.postMsgStop(myString);
      console.log(`postMsgStop of ${myString} is ${myHash}`);
    });

  },
  preparePageForScreenshot(Buffer, a, b) {
    //打印截取进度 
    console.log(Math.round(a / b * 100) + "%---共截取" + b)
  },
  pipeMode: false,
  canvasCaptureMode: false,
  //url: 'http://127.0.0.1:8082/index_bar_sort.html',
  url: 'http://127.0.0.1:8082/index_line_sort.html',
  // url: 'http://video.cross.webdev.com/h5/work/headlessWeb/chart/index2.html',
  // viewport: {
  //   width: 1080,
  //   height: 540
  // },
  viewport: {
    width: 840,
    height: 500
  },
  selector: '#content',
  left: 0, top: 0,
  right: 0, bottom: 0,
  fps: 25,
  duration: 3000,
  outputDirectory: 'frames' + Math.round(Math.random() * 1000)

}).then(() => {
  console.log('Done!');
});




