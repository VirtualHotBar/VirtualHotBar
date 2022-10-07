---
title: 修改bootmgr启动路径\boot\bcd最简单方法
tags: []
categories:
  - - 原创软件
date: 2020-07-07 23:08:02
---

![](https://i.hotpe.top/i/2022/05/02/ioipu5-0.webp) 

非常简单的修改bootmgr的方法，网上大部分是用16进制编辑器（像winhex，C32Asm这些）来直接编辑bootmgr文件，这样的方法限制很大只能修改BOOT\\BCD中的CD两个字符。此方法可以很简单的编辑\\boot\\bcd中的任何字符。
 用到的工具： bootmgr的BCD路径工具（UP主自己制作的工具） 
 下载地址:https://cloud.189.cn/t/eYfmEjVJbuIv

## 修改方法

1.打开修改bootmgr的BCD路径工具，然后修改好路径。
 ![](https://i.hotpe.top/i/2022/05/01/123tn1b-0.webp)

 2.点生成bootmgr，会提示生成成功。
 ![](https://i.hotpe.top/i/2022/05/01/123ttwa-0.webp)

 3.打开DS目录（DS目录在此工具的运行目录）
 ![](https://i.hotpe.top/i/2022/05/01/123u90g-0.webp)

 4.运行DS目录中的 **生成bootmgr.bat** ，运行完成后DS目录中只有一个 **bootmgr** 文件，这个文件就是修改好路径的 bootmgr 文件，可以直接使用。

![](https://i.hotpe.top/i/2022/05/01/123uhug-0.webp)

# 测试：

启动成功！
 ![](https://i.hotpe.top/i/2022/05/01/123uuex-0.webp) 

测试工具下载地址：https://magmastudio.lanzoux.com/iLNMcedvvxc 

bootmgr文件是Windows 8的，在其他系统上也能正常启动。 

谢谢你的阅读，如果这篇文章帮助到了你，请收藏。如果没有帮助到你也可以收藏 可能以后会用到呢。