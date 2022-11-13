---
title: 'HotEditBootmgrFile v1.2——最简修改BCD路径v1.2,\boot\bcd,启动修改'
tags: []
categories:
  - - 原创软件
abbrlink: 14714
date: 2021-11-27 11:55:13
#cover: https://i.hotpe.top/i/2022/05/02/j0x88c-0.jpg
---


### 介绍

HotEditBootmgrFile是由VirtualHotBar打造的一个修改Bootmgr文件中BCD路径的小工具，实现了HotPE文件结构的个性化。

<a></a>
<!--more-->

### 下载

https://www.lanzoui.com/itAUtwyjn2f

### 界面

![](https://i.hotpe.top/i/2022/05/02/j07id3-0.webp) 
### 结构 
有HotEditBootmgrFile.exe和HotEditBootmgrFile.dll文件
 正常使用打开HotEditBootmgrFile.exe就行。
 HotEditBootmgrFile.dll是主要文件，HotEditBootmgrFile.exe是GUI调用其中的HotEditBootmgrFile函数。

### 调用

HotEditBootmgrFile函数的参数：
 HotEditBootmgrFile(str,str,str) 第一个参数是BCD所在文件夹，如“\\Boot\\BCD”中的“Boot”。
 第二个参数是BCD文件名，如“\\Boot\\BCD”中的“BCD”。 
第二个参数是生成完成后写出Bootmgr文件的路径，如“D:\\Bootmgr”。

### Python调用示例

注意：请用32位的Python
 `from ctypes import *`
 `#调用HotEditBootmgrFile函数`
 `res = CDLL("E:\\Program\\HotEditBootmgrFile\\HotEditBootmgrFile.dll").HotEditBootmgrFile(c_char_p("Boot".encode('utf-8')),c_char_p("BCD".encode('utf-8')),c_char_p("D:\\Bootmgr".encode('utf-8')))`
 `#打印返回结果，1=生成成功`
 `print(res)`

### 运行结果

![](https://i.hotpe.top/i/2022/05/02/j1hm2r-0.png)

谢谢你的阅读，如果这篇文章帮助到了你，请收藏。如果没有帮助到你也可以收藏 可能以后会用到呢。