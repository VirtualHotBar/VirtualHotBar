---
title: 「技术实践」Legacy启动模式下修改开机Logo，Win7+
tags:
  - logo修改
categories:
  - - 教程
abbrlink: 49722
date: 2022-08-03 15:29:07
cover: https://s1.ax1x.com/2022/11/04/xL5TIA.png
---



实现于HotPE2.4Final，体验链接：[https://www.hotpe.top/](https://www.hotpe.top/)

### 步骤

7Zip下载:[https://sparanoid.com/lab/7z/](https://sparanoid.com/lab/7z/) 

其他工具下载：[https://wwp.lanzouj.com/iQHRj08x1wxi](https://wwp.lanzouj.com/iQHRj08x1wxi) 密码:g1v4

#### 1.提取原版bootres.dll文件中的logo文件

找到启动分区下的\\Boot\\Resources\\bootres.dll文件，然后用7zip解压。如果权限不够就在PE里操作。
![](https://s1.ax1x.com/2022/11/04/xLIry8.md.png) 

解压后就看到开机Logo了
 ![](https://s1.ax1x.com/2022/11/04/xLIcwQ.md.png)

#### 2.修改图片

修改logo图片，注意图片的格式和大小，用图画或ps都行。修改后的效果：
![](https://s1.ax1x.com/2022/08/03/vVzsTx.png)

#### 3.将logo图片打包为bin文件

以管理员运行WimTool，选择"新制和追加"选项卡 源目录选择bootres.dll解压出来修改后的logo文件夹，然后选择wim保存位置 压缩类型选择"最大压缩"，映像名称改为"Boot Resource WIM",然后点"新建映像"

 ![](https://i.hotpe.top/img/202208031448777.png) 

然后把.wim文件的后缀改为.bin 

![](https://i.hotpe.top/img/202208031459013.png)

#### 4.修改bootres.dll的资源

管理员运行ResourceHacker，打开原版bootres.dll文件，替换RC 数据的第一个资源 
![](https://i.hotpe.top/img/202208031455815.png) 

选择刚才的.bin文件，然后点替换 
![](https://i.hotpe.top/img/202208031500609.png) 

Ctrl + S键保存

#### 5.清除bootres.dll的数字签名

管理员运行RemovePeSign，选择修改过后的bootres.dll文件，然后点"清除数字签名"
 ![](https://i.hotpe.top/img/202208031513665.png) 

生成的bootres.dll.nosign文件就是成品了，备份原版bootres.dll后替换就好了
 ![](https://i.hotpe.top/img/202208031516064.png)

#### 6.修改系统BCD文件

打开BOOTICE，选择"BCD 编辑"选项卡，然后点击"智能编辑模式"。 
![](https://i.hotpe.top/img/202208031519266.png) 

将系统的"禁用数字签名验证"和"Win8 Metr启动界面"启用，保存
 ![](https://i.hotpe.top/img/202208031521145.png) 

大功告成 ！
