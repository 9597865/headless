const timecut = require('timecut');
timecut({
  //url: 'https://tungs.github.io/truchet-tiles-original/#autoplay=true&switchStyle=random',
  url:'http://127.0.0.1:8080/main.html',
  viewport: {
    width: 800,               // sets the viewport (window size) to 800x600
    height: 600
  },
  selector: '#container',     // crops each frame to the bounding box of '#container'
  left: 20, top: 40,          // further crops the left by 20px, and the top by 40px
  right: 6, bottom: 30,       // and the right by 6px, and the bottom by 30px
  fps: 15,                    // saves 30 frames for each virtual second
  duration: 10,               // for 20 virtual seconds
  output: 'video.mp4'         // to video.mp4 of the current working directory
}).then(function () {
  console.log('Done!');
});
