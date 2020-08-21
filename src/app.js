const timesnap = require('timesnap')
timesnap({
  headless: true,
  ignoreHTTPSErrors: false,
  launchArguments: [
    '--enable-usermedia-screen-capturing',
    '--allow-http-screen-capture',
    '--no-sandbox',
    '--auto-select-desktop-capture-source=pickme',
    '--disable-setuid-sandbox'
  ],
  preparePage(page) {
    //播放视频
    page.tap('#content');
  },
  preparePageForScreenshot(Buffer, a, b) {
    //打印截取进度 
    console.log(Math.round(a / b * 100) + "%---共截取" + b)
  },
  pipeMode: false,
  canvasCaptureMode: false,
  url: 'http://video.cross.webdev.com/h5/work/headlessWeb/chart/index2.html',
  viewport: {
    width: 810,
    height: 450
  },
  selector: '#content',
  left: 0, top: 0,
  right: 0, bottom: 0,
  fps: 25,
  duration: 15,
  outputDirectory: 'frames' + Math.round(Math.random() * 1000)

}).then(function () {
  console.log('Done!');
});




