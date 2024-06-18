---
title: 文字图片生成器 HotTextPicture
tags: []
categories:
  - - 原创软件
abbrlink: 2608
date: 2021-11-27 11:36:07
---

# HotTextPicture v1.1

## 介绍

HotTextPicture是一个小玩具，生成用带颜色的指定字符组成图片。可以用来表白或搞基友，祝你早日实现“面向对象编程”！



## 下载

[https://www.123pan.com/s/KuQrVv-U0ni](https://www.123pan.com/s/KuQrVv-U0ni)

## 演示

<iframe src="//player.bilibili.com/player.html?aid=378261214&bvid=BV1Af4y1A7FD&cid=417639576&page=1&high_quality=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>

## 界面

![](https://www.hotpe.top/wp-content/uploads/2021/11/uTools_1638008647480.png)

## 结构

图片字体是阿里巴巴普惠体 Bold(TrueType) 灵感来自BV1mq4y1n7aE，简单修改了视频中的代码加写GUI。

## 调用

使用pyinstaller编译不需要安装python库，打开直接使用。

### 核心代码

注意：不含UI

```python
import sys
import os
from PIL import Image, ImageDraw, ImageFont 
CHILD_W = CHILD_H = 16                                      # 子图的尺寸，宽和高都是16像素

runDir = os.path.split( os.path.realpath( sys.argv[0] ) )[0]
txt = open(runDir + "\\text.txt", encoding="utf-8").read()

font = ImageFont.truetype(runDir + '\\Font.ttf', CHILD_W)     # 字体及大小,选用粗体字体效果更好

print("文本：",txt)
print("字体：",runDir + '\\Font.ttf')
print("原图片：",runDir + "\\import.JPG")
print("——"*10)
# 程序入口
if __name__ == '__main__':
    imgSrc = Image.open(runDir + "\\import.JPG")                        # 打开源图像
    w, h = imgSrc.size                                      # 源图像宽和高

    imgChild = Image.new("RGB", (CHILD_W, CHILD_H))         # 新建子图
    imgDst = Image.new("RGB", (CHILD_W*w, CHILD_H*h) )      # 创建目标图像的空图，待填充

    textW, textH = font.getsize("迷")                       # 取得单个文字的宽、高信息
    offsetX = (CHILD_W - textW) >> 1                        # 文字水平居中绘制
    offsetY = (CHILD_H - textH) >> 1                        # 文字垂直居中绘制

    charIndex = 0                                           # 序号，代表当前绘制哪个汉字
    draw = ImageDraw.Draw(imgChild)                         # 取得小图的绘图对象，用于绘制文字
    print("开始处理图片...")
    for y in range(h):
        print("进度:" + str (int(y/h*100))+"%" )
        for x in range(w):
            draw.rectangle( (0, 0, CHILD_W, CHILD_H), fill = 'lightgray' )  # 灰色背景效果比外色略好

            draw.text( (offsetX, offsetY), txt[charIndex], font = font, fill = imgSrc.getpixel((x, y)) )

            imgDst.paste(imgChild, (x*CHILD_W, y*CHILD_H))  # 把绘制好的子图填到imgDst里

            charIndex += 1                                  # 序号加1，从而依次绘制每个字
            if charIndex == len(txt):                       # 循环绘制
                charIndex = 0

    print("进度:100%")
    print("正在保存文件...")
    imgDst.save(runDir + "\\Output.JPG")                                # 保存图片
    print(runDir + "\\Output.JPG")
    print("完成！")
```

2021年11月27日