const timecut = require('timecut');
timecut({
  url: 'https://tungs.github.io/truchet-tiles-original/#autoplay=true&switchStyle=random',
  viewport: {
    width: 800,       
    height: 600
  },
  selector: '#container',
  left: 20, top: 40,     
  right: 6, bottom: 30,  
  fps: 15,               
  duration: 10,          
  output: 'video.mp4'    
}).then(function () {
  console.log('Done!');
});
