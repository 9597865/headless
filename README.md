# headless
web网页转视频的一个项目预言 nodejs运行环境


[输出视频demo](http://)


依赖
  + timesnap
  + puppeteer

## 原理

timesnap库，利用 谷歌无头浏览器puppeteer，在后台运行并定时截取web图像。
## 使用方法
项目包，您需要手动安装依赖后

运行

```
node app.js
```

## 使用介绍

在puppeteer中提供对页面的控制。
比如在提供的案例中就用到了。页面加载完毕后，点击容器事件，让video播放。否则视频默认不不放。
```
preparePage(page){
  //播放视频
  page.tap('#content');
}
preparePageForScreenshot(Buffer, a, b) {
  //打印截取进度 
  console.log(Math.round(a/b*100) + "%---共截取" +b)
},
```

## 注意事项

- 1.想利用puppeteer截取web页面，需要在timesnap 添加 '--no-sandbox', 否则服务器报错
- 2.截取web中带有视频的页面，视频格式不能为mp4，应为ogv格式视频。否则不能截取视频

#### 批量合并png为视频。
合并png图为视频，需要用到ffmpeg
```
//注意，合并出的视频尺寸，必须为偶数，否则ffmpeg报错
//下面代码 就输出尺寸为:376x668 
ffmpeg  -r 25 -pattern_type glob -i '*.png' -s 376x668 -c:v libx264 -vf fps=25 -pix_fmt yuv420p -y  out.mp4
```
#### mp4中插入音频文件
erge.mp3为背景音乐文件
out.mp4 为刚刚批量png合并后的 mp4文件
-shortest 参数为 取视频和mp3最短，时间为准。
```
ffmpeg -i erge.mp3 -i out.mp4 -shortest -vcodec libx264  -y out_bgm.mp4
```
