const timesnap = require('timesnap')
timesnap({
  headless: true,
  ignoreHTTPSErrors: false, 
  launchArguments : [
    '--enable-usermedia-screen-capturing', 
    '--allow-http-screen-capture',
    '--no-sandbox',
    '--auto-select-desktop-capture-source=pickme',
    '--disable-setuid-sandbox'
  ],
  preparePage : function(page) {
    //page.tap('#playbtn');
  },
  pipeMode : false,
  canvasCaptureMode : false,
  url: 'http://127.0.0.1:8080/video.html',
  viewport: {
    width: 375,               // sets the viewport (window size) to 800x600
    height: 667
  },
  selector: '#content',     // crops each frame to the bounding box of '#container'
  left: 0, top: 0,          // further crops the left by 20px, and the top by 40px
  right: 0, bottom: 0,       // and the right by 6px, and the bottom by 30px
  fps: 25,                    // saves 30 frames for each virtual second
  duration: 38,               // for 20 virtual seconds 
  outputDirectory: 'frames'   // to frames/001.png... frames/600.png
                              // of the current working directory
}).then(function () {
  console.log('Done!');
});




