---
title: 'HotVHDPE部署工具,将传统PE转换成VHDPE并安装,开源,拥有极强的兼容性'
tags: []
id: '96'
categories:
  - - 原创软件
abbrlink: 37950
date: 2022-01-06 12:38:52
#cover: https://i.hotpe.top/i/2022/05/02/kfydxd-0.png
---



### 写在前面

HotVHDPE部署工具是由VirtualHotBar打造的一个将PE以VHD形式安装到U盘工具，完全开源，实现了VHDPE的安装部署。（将传统PE转换成VHDPE并安装） VHDPE具有加载速度快、断电可保存数据等特点


### 技术支持

Github代码仓库：[https://github.com/VirtualHotBar/HotVHDPEDeployToolForZNPE](https://github.com/VirtualHotBar/HotVHDPEDeployToolForZNPE) 

读U盘列表：BOOTICE 

WIM镜像操作：wimlib-imagex 

磁盘分区、VHD操作：diskpart

### 运行环境

采用C#编写需要.NET运行环境 系统版本需要Win10 18xx 以上（U盘多分区）

### 特征

支持Legacy与UEFI双启动方式。 
HotVHDPE部署工具会自动补齐引导文件并生成vhdx文件 采用双分区启动方式，引导文件放efi分区（fat32），vhdx文件放data分区（ntfs），拥有极强的兼容性。 
支持免格升级。

### 使用

打开HotVHDPE部署工具，选择U盘，选择WIM镜像的位置（以微PE为例），点击“开始部署”
 ![](https://i.hotpe.top/i/2022/05/02/kfydxd-0.png) 

UEFI启动测试成功！
 ![](https://i.hotpe.top/i/2022/05/02/kfyfox-0.png) 

Legacy启动测试成功！
 ![](https://i.hotpe.top/i/2022/05/02/kfyjl3-0.png) 

双分区：
 ![](https://i.hotpe.top/i/2022/05/02/kfyacs-0.png)

### 下载

版本：0.1(织女PE定制) 
时间：2022/1/16 
[https://www.123pan.com/s/KuQrVv-S0ni](https://www.123pan.com/s/KuQrVv-S0ni)

### 写在最后

零基础C#，6天打造HotVHDPE部署工具，代码写得非常垃圾见谅

### 问题

谢谢大家反馈的问题，我会在暑假修复，并更新新版本！ 1.添加仅生成vhdx文件功能 2.添加仅生成ISO镜像功能 3.修复磁盘操作问题