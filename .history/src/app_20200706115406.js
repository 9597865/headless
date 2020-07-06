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
  preparePage = (page) => {
    page.tap('#content');
  },
  frameProcessor = () => {
    
  },
  pipeMode : false,
  canvasCaptureMode : false,
  url: 'http://127.0.0.1:8080/video.html',
  viewport: {
    width: 375,               
    height: 667
  },
  selector: '#content',     
  left: 0, top: 0,          
  right: 0, bottom: 0,      
  fps: 25,                  
  duration: 38,             
  outputDirectory: 'frames'+Math.round(Math.random()*1000)
                            
}).then(function () {
  console.log('Done!');
});




