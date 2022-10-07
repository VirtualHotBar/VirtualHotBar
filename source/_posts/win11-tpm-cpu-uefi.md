---
title: 如何Win11绕过硬件限制，强制升级！！TPM CPU UEFI
tags: []
categories:
  - - 教程
date: 2021-10-23 11:42:45
---

**​![](https://i.hotpe.top/i/2022/05/02/iykav2-0.jpg)** 
  **10月5日Win11正式发布了！** 
**Win11提高了升级的门槛，需要电脑支持UEFI安全启动，支持TPM1.2****！
** **在CPU方面，需要英特尔8代CPU、AMD锐龙2000系列起步！
** ![](https://i.hotpe.top/i/2022/05/02/ipilub-0.webp)
 **虽然升级门槛高，但是不要气馁可以强制升级！
** **首先要下载Windows11的ISO镜像文件** 

## 方法1：

1.删除Win11iso里的sources\\appraiserres.dll文件。 
或将Win11iso里的isources\\appraiserres.dll文件替换成空文件。 
还将Win11iso里的isources\\appraiserres.dll文件可以替换成win10的appraiserres.dll文件。 

2.删除C:\\ $WINDOWS.~BT\\Sources\\appraiserres.dll文件 运行setup.exe强制升级！

## 方法2：

进入Win PE，使用Dism++、WinNTSetup等工具直接安装！

 HotPE：https://www.hotpe.top/download 

[HotPE使用教程](https://www.bilibili.com/video/BV14q4y1V7dW?spm_id_from=333.999.0.0)

## 方法3：

用win11iso的sources\\boot.wim和sources\\install.wim文件替换win10的sources\\boot.wim和sources\\install.wim，运行setup.exe强制升级！